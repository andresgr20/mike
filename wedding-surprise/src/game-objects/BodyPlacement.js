import { Placement } from "./Placement";
import {
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  Z_INDEX_LAYER_SIZE,
  directionUpdateMap,
  PLACEMENT_MUSIC,
} from "../helpers/consts";
import { Collision } from "../classes/Collision";
export class BodyPlacement extends Placement {
  getCollisionAtNextPosition(direction) {
    const { x, y } = directionUpdateMap[direction];
    const nextX = this.x + x;
    const nextY = this.y + y;
    return new Collision(this, this.level, {
      x: nextX,
      y: nextY,
    });
  }

  getInteractionsAttNextPosition(direction) {
    const collision = this.getCollisionAtNextPosition(direction);
    return collision.withInteract();
  }

  isSolidAtNextPosition(direction) {
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
    this.onPostMove();
    this.handleMoveSounds();
  }

  handleMoveSounds() {
    return null;
  }

  onPostMove() {
    return null;
  }

  handleCollisions() {
    const collision = new Collision(this, this.level);
    const collideThatAddsToInvetory = collision.withPlacementAddsToInventory();
    const musicTiles = collision.withMusicTiles();
    if (collideThatAddsToInvetory) {
      collideThatAddsToInvetory.collect();
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
    this.tickMoveAi();
  }

  getYTranslate() {
    // Stand on ground when not moving
    if (this.movingPixelRemaining === 0) {
      return 0;
    }

    //Elevate ramp up or down at beginning/end of movement
    const PIXELS_FROM_END = 2;
    if (
      this.movingPixelRemaining < PIXELS_FROM_END ||
      this.movingPixelRemaining > 16 - PIXELS_FROM_END
    ) {
      return -1;
    }

    // Highest in the middle of the movement
    return -2;
  }

  zIndex() {
    return this.y * Z_INDEX_LAYER_SIZE;
  }
}
