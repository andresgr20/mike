import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  PLAYER_1_RUN_1,
  PLAYER_1_RUN_2,
  BODY_SKINS,
  Z_INDEX_LAYER_SIZE,
  LEVEL_THEMES,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import { BodyPlacement } from "./BodyPlacement";
import Body from "../components/graphics/Body";
import soundManager, { SFX } from "../classes/Sounds";
import { HeartPlacement } from "./HeartPlacement";

const playerSkinMap = {
  [BODY_SKINS.NORMAL]: [TILES.PLAYER_1_LEFT, TILES.PLAYER_1_RIGHT],
  [PLAYER_1_RUN_1]: [TILES.PLAYER_1_RUN_1_LEFT, TILES.PLAYER_1_RUN_1_RIGHT],
  [PLAYER_1_RUN_2]: [TILES.PLAYER_1_RUN_2_LEFT, TILES.PLAYER_1_RUN_2_RIGHT],
};
export class PlayerPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.canCollectItems = true;
    this.tickCount = 0;
    this.animationStart = false;
    this.endTickAnimation = 4;
    if (level.theme === LEVEL_THEMES.HIDING) {
      this.distance = this.getCurrentDistanceFromTarget();
      this.maxDistance = Math.sqrt(
        level.tilesWidth ** 2 + level.tilesHeight ** 2
      );
      soundManager.setVolume(this.normalizeSound);
    }
  }
  controllerMoveRequested(direction) {
    if (this.movingPixelRemaining > 0) {
      return;
    }

    const interactions = this.getInteractionsAttNextPosition(direction);

    if (interactions) {
      interactions.doInteraction();
    }

    const completesLevel = this.getCompletesNextPosition(direction);
    if (completesLevel) {
      this.animationStart = true;
    }

    const possibleLock = this.getLockAtNextPosition(direction);
    if (possibleLock) {
      possibleLock.unlock();
      return;
    }

    if (this.isSolidAtNextPosition(direction)) {
      return;
    }

    this.movingPixelRemaining = 16;
    this.movingPixelDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  tick() {
    this.tickMovingPixelProgress();
    if (this.animationStart) {
      this.startTickCount();
    }
  }

  startTickCount() {
    this.tickCount += 16.6;
    if (this.tickCount >= 16.6 * this.endTickAnimation) {
      this.level.setCompleteLevel();
      this.level.inventory.add("SWORD", "WEDDING");
    }
  }

  handleInteraction(interaction) {
    interaction.doInteraction();
    return;
  }

  // using pytagorean to find the closest one and play the sounds
  getCurrentDistanceFromTarget() {
    const [catX, catY] = this.level.getCatCoordinates();
    return Math.sqrt((this.x - catX) ** 2 + (this.y - catY) ** 2);
  }

  getLockAtNextPosition(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    return collision.withLock();
  }

  getCompletesNextPosition(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    return collision.withCompletesLevel();
  }

  handleMoveSounds() {
    if (this.level.theme === LEVEL_THEMES.HIDING) {
      this.distance = this.getCurrentDistanceFromTarget();
      soundManager.setVolume(this.normalizeSound());
      soundManager.playSfx(SFX.MEOW);
    }
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

  normalizeSound() {
    return 1 - (this.distance / this.maxDistance) * (1 - 0.1) + 0.01;
  }

  zIndex() {
    // anything with a higher value with appear on top
    return this.y * Z_INDEX_LAYER_SIZE + 1;
  }
  renderComponent() {
    return (
      <div>
        <Body
          frameCoord={this.getFrame()}
          yTranslate={this.getYTranslate}
          showShadow
        />
      </div>
    );
  }
}
