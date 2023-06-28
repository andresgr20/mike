import { Placement } from "./Placement";
import Player from "../components/graphics/Player";
import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  PLAYER_1_RUN_1,
  PLAYER_1_RUN_2,
  BODY_SKINS,
  Z_INDEX_LAYER_SIZE,
  directionUpdateMap,
  PLACEMENT_MUSIC,
} from "../helpers/consts";
import { Collision } from "../classes/Collision";
import { TILES } from "../helpers/tiles";
import { BodyPlacement } from "./BodyPlacement";

const playerSkinMap = {
  [BODY_SKINS.NORMAL]: [TILES.PLAYER_1_LEFT, TILES.PLAYER_1_RIGHT],
  [PLAYER_1_RUN_1]: [TILES.PLAYER_1_RUN_1_LEFT, TILES.PLAYER_1_RUN_1_RIGHT],
  [PLAYER_1_RUN_2]: [TILES.PLAYER_1_RUN_2_LEFT, TILES.PLAYER_1_RUN_2_RIGHT],
};
export class PlayerPlacement extends 
BodyPlacement {
  controllerMoveRequested(direction) {
    if (this.movingPixelRemaining > 0) {
      return;
    }

    const interactable = this.getInteractableAtNextPosition(direction);

    // Need to see if they can be interactable
    if (interactable) {
      interactable.showInteraction();
      return;
    }
    if (this.isSolidAtNextPostion(direction)) {
      return;
    }

    this.movingPixelRemaining = 16;
    this.movingPixelDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  tick() {
    this.tickMovingPixelProgress();
  }

  getFrame() {
    const index = this.spriteFacingDirection === DIRECTION_LEFT ? 0 : 1;

    if (this.movingPixelRemaining > 0) {
      const walkKey =
        this.spriteWalkFrame === 0 ? PLAYER_1_RUN_1 : PLAYER_1_RUN_2;
      return playerSkinMap[walkKey][index];
    }
    return playerSkinMap[BODY_SKINS.NORMAL][index];
  }

  zIndex() {
    // anything with a higher value with appear on top
    return this.y * Z_INDEX_LAYER_SIZE + 1;
  }
  renderComponent() {
    return (
      <Player frameCoord={this.getFrame()} yTranslate={this.getYTranslate()} />
    );
  }
}
