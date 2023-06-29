import { BodyPlacement } from "./BodyPlacement";
import {
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  LEVEL_THEMES,
} from "../helpers/consts";

export class NPCPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 28;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.movingPixelDirection = properties.initialDirection ?? DIRECTION_RIGHT;
  }

  tickMoveAi() {
    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }
    this.internalMoveRequested(this.movingPixelDirection);
  }

  tickMoveAi() {
    this.checkForOverlapPlayer();
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
    const currentDir = this.movingPixelDirection;

    // Horizontal
    if (currentDir == DIRECTION_LEFT || currentDir === DIRECTION_RIGHT) {
      this.movingPixelDirection =
        this.movingPixelDirection === DIRECTION_LEFT
          ? DIRECTION_RIGHT
          : DIRECTION_LEFT;
      return;
    }
    this.movingPixelDirection =
      currentDir === DIRECTION_UP ? DIRECTION_DOWN : DIRECTION_UP;
  }

  checkForOverlapPlayer() {
    const [myX, myY] = this.displayXY();
    const [playerX, playerY] = this.level.heroRef.displayXY();
    const xDiff = Math.abs(myX - playerX);
    const yDiff = Math.abs(myY - playerY);
    if (xDiff <= 2 && yDiff <= 2 && this.level.theme === LEVEL_THEMES.RUNNING) {
      this.level.score += 1;
    }
  }
  renderComponent() {
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? TILES.CAT_RIGHT
        : TILES.CAT_LEFT;
    return (
      <Body frameCoord={frameCoord} yTranslate={this.yTranslate()} showShadow />
    );
  }
}
