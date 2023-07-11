import {
  CELL_SIZE,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
} from "../helpers/consts";

export class Placement {
  constructor(properties, level) {
    this.id = properties.id;
    this.x = properties.x;
    this.y = properties.y;
    this.type = properties.type;
    this.level = level;
    this.tile = properties.tile ?? null;
    this.message = properties.message ?? null;
    this.next_game_id = properties.next_game_id ?? null;
    this.ai_movement = properties.ai_movement ?? null;
    this.npc = properties.npc ?? null;

    this.travelPixelPerFrame = 1.5;
    this.movingPixelRemaining = 0;
    this.movingPixelDirection = DIRECTION_RIGHT;
    this.spriteFacingDirection = DIRECTION_RIGHT;
    this.spriteWalkFrame = 0;
    this.canBeCollected = false;
    this.hasBeenCollected = false;
  }

  renderComponent() {
    return null;
  }

  getMessage() {
    return this.message;
  }

  getTile() {
    return this.tile;
  }

  zIndex() {
    return 1;
  }

  canAddMusicEffect() {
    return false;
  }

  addsItemsToInventoryOnCollide() {
    return null;
  }

  tick() {}

  isSolidForBody(_body) {
    return false;
  }

  collect() {
    this.hasBeenCollected = true;
    this.level.inventory.add(this.addsItemsToInventoryOnCollide());
  }

  nextLevelOnCollide() {
    return false;
  }
  canBeInteracted() {
    return false;
  }

  tickMoveAi() {
    return null;
  }

  canBeUnlocked() {
    return false;
  }

  damagesBodyOnCollide(_body) {
    return null;
  }

  completesLevelOnCollide() {
    return false;
  }

  displayXY() {
    if (this.movingPixelRemaining > 0) {
      return this.displayMovingXY();
    }
    const x = this.x * CELL_SIZE + "px";
    const y = this.y * CELL_SIZE + "px";
    return [x, y];
  }

  displayXYNoPx() {
    if (this.movingPixelRemaining > 0) {
      return this.displayMovingXY();
    }
    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    return [x, y];
  }

  displayMovingXY() {
    const x = this.x * CELL_SIZE;
    const y = this.y * CELL_SIZE;
    const progressPixels = CELL_SIZE - this.movingPixelRemaining;
    switch (this.movingPixelDirection) {
      case DIRECTION_LEFT:
        return [x - progressPixels, y];
      case DIRECTION_RIGHT:
        return [x + progressPixels, y];
      case DIRECTION_UP:
        return [x, y - progressPixels];
      default:
        return [x, y + progressPixels];
    }
  }
}
