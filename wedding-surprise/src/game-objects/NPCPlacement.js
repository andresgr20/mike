import { BodyPlacement } from "./BodyPlacement";
import {
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  LEVEL_THEMES,
  NPC_MAP,
} from "../helpers/consts";
import Body from "../components/graphics/Body";

export class NPCPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 28;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.small = properties.small ?? false;
    this.enemy = false;
  }

  tickMoveAi() {
    // a switch based on the ai_movement
    // this.checkForOverlapPlayer();
    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }
    this.internalMoveRequested(this.movingPixelDirection);
  }

  internalMoveRequested(direction) {
    if (this.movingPixelRemaining > 0) {
      return;
    }

    if (this.isSolidAtNextPosition(direction)) {
      this.switchDirection();
      return;
    }

    //Start the move
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.movingPixelRemaining = 16;
    this.movingPixelDirection = direction;
    this.updateFacingDirection();
    this.updateWalkFrame();
  }

  switchDirection() {
    const currentDir = this.movingPixelDirection;

    // Horizontal change
    if (currentDir === DIRECTION_LEFT || currentDir === DIRECTION_RIGHT) {
      this.movingPixelDirection =
        currentDir === DIRECTION_LEFT ? DIRECTION_RIGHT : DIRECTION_LEFT;
      return;
    }
    // Vertical change
    this.movingPixelDirection =
      currentDir === DIRECTION_UP ? DIRECTION_DOWN : DIRECTION_UP;
  }

  // checkForOverlapPlayer() {
  //   const [myX, myY] = this.displayXY();
  //   const [playerX, playerY] = this.level.heroRef.displayXY();
  //   const xDiff = Math.abs(myX - playerX);
  //   const yDiff = Math.abs(myY - playerY);
  //   if (xDiff <= 2 && yDiff <= 2 && this.level.theme === LEVEL_THEMES.RUNNING) {
  //     this.level.score += 1;
  //   }
  // }

  renderComponent() {
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? NPC_MAP[this.npc].LEFT
        : NPC_MAP[this.npc].RIGHT;
    return (
      <Body
        frameCoord={frameCoord}
        yTranslate={this.getYTranslate()}
        showShadow={this.small ? false : true}
        size={this.small ? 16 : 32}
      />
    );
  }
}
