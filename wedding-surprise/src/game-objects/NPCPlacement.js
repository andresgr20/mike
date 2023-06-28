import { BodyPlacement } from "./BodyPlacement";
import { DIRECTION_LEFT, DIRECTION_RIGHT } from "../helpers/consts";

export class NPCPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 28;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
  }

  tickMoveAi() {
    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }
    this.internalMoveRequested(this.movingPixelDirection);
  }

  internalMoveRequested(direction) {
    if (this.movingPixelsRemaining > 0) {
      return;
    }

    if (this.isSolidAtNextPosition(direction)) {
      this.switchDirection();
      return;
    }

    //Start the move
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.movingPixelsRemaining = 16;
    this.movingPixelDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  switchDirection() {
    this.movingPixelDirection =
      this.movingPixelDirection === DIRECTION_LEFT
        ? DIRECTION_RIGHT
        : DIRECTION_LEFT;
  }

  renderComponent() {
    // const frameCoord = this.spriteFacingDirection === DIRECTION_LEFT ? TILES.CAT
    return;
  }
}
