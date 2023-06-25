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

const playerSkinMap = {
  [BODY_SKINS.NORMAL]: [TILES.PLAYER_1_LEFT, TILES.PLAYER_1_RIGHT],
  [PLAYER_1_RUN_1]: [TILES.PLAYER_1_RUN_1_LEFT, TILES.PLAYER_1_RUN_1_RIGHT],
  [PLAYER_1_RUN_2]: [TILES.PLAYER_1_RUN_2_LEFT, TILES.PLAYER_1_RUN_2_RIGHT],
};
export class PlayerPlacement extends Placement {
  controllerMoveRequested(direction) {
    if (this.movingPixelRemaining > 0) {
      return;
    }

    const interactable = this.getInteractableAtNextPosition(direction);
    if (interactable) {
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

  getCollisionAtNextPosition(direction) {
    const { x, y } = directionUpdateMap[direction];
    const nextX = this.x + x;
    const nextY = this.y + y;
    return new Collision(this, this.level, {
      x: nextX,
      y: nextY,
    });
  }

  getInteractableAtNextPosition(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    return collision.withInteract();
  }

  isSolidAtNextPostion(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    const isOutOfBounds = this.level.isPositionOutOfBounds(
      collision.x,
      collision.y
    );
    if (isOutOfBounds) {
      return true;
    }

    return Boolean(collision.withSolidPlacement());
  }

  updateWalkFrame() {
    this.spriteWalkFrame = this.spriteWalkFrame === 1 ? 0 : 1;
  }

  tickMovingPixelProgress() {
    if (this.movingPixelRemaining === 0) {
      return;
    }
    this.movingPixelRemaining -= this.travelPixelPerFrame;
    if (this.movingPixelRemaining <= 0) {
      this.movingPixelRemaining = 0;
      this.onDoneMoving();
    }
  }

  updateFacingDirection() {
    if (
      this.movingPixelDirection === DIRECTION_LEFT ||
      this.movingPixelDirection === DIRECTION_RIGHT
    ) {
      this.spriteFacingDirection = this.movingPixelDirection;
    }
  }
  onDoneMoving() {
    const { x, y } = directionUpdateMap[this.movingPixelDirection];
    this.x += x;
    this.y += y;
    this.handleCollisions();
  }

  handleCollisions() {
    const collision = new Collision(this, this.level);
    const collideThatAddsToInvetory = collision.withPlacementAddsToInventory();
    const musicTiles = collision.withMusicTiles();
    if (collideThatAddsToInvetory) {
      collideThatAddsToInvetory.collect();
      //   this.level.addPlacement({
      //     type: PLACEMENT_TYPE_CELEBRATION,
      //     x: this.x,
      //     y: this.y,
      //   });
    }
    if (musicTiles) {
      this.level.addPlacement({
        type: PLACEMENT_MUSIC,
        x: this.x,
        y: this.y,
      });
    }
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

  getYTranslate() {
    if (this.movingPixelsRemaining === 0) {
      return 0;
    }

    // ramp up height
    const PIXELS_FROM_END = 2;
    if (
      this.movingPixelRemaining < PIXELS_FROM_END ||
      this.movingPixelRemaining > 16 - PIXELS_FROM_END
    ) {
      return -1;
    }
    return -2;
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
