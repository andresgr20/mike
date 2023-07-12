import { BodyPlacement } from "./BodyPlacement";
import {
  BEHAVIOURS,
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
  LEVEL_THEMES,
  NPCS,
  NPC_MAP,
} from "../helpers/consts";
import Body from "../components/graphics/Body";

export class NPCPlacement extends BodyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.tickBetweenMovesInterval = 38;
    this.ticksUntilNextMove = this.tickBetweenMovesInterval;
    this.small = properties.small ?? false;
    this.behaviour = properties.behaviour ?? BEHAVIOURS.HORIZONTAL;
    this.movingPixelDirection =
      this.behaviour === BEHAVIOURS.HORIZONTAL ? DIRECTION_LEFT : DIRECTION_UP;
  }

  tickMoveAi() {
    if (BEHAVIOURS.STATIC === this.behaviour) {
      if (this.npc === NPCS.GOBLIN) {
        this.spriteFacingDirection = DIRECTION_LEFT;
      }
      return;
    }
    this.checkForOverlapPlayer();
    if (this.ticksUntilNextMove > 0) {
      this.ticksUntilNextMove -= 1;
      return;
    }
    this.internalMoveRequested(this.movingPixelDirection);
  }

  onPostMove() {
    if (this.behaviour === BEHAVIOURS.RANDOM) {
      const directions = [
        DIRECTION_DOWN,
        DIRECTION_LEFT,
        DIRECTION_RIGHT,
        DIRECTION_UP,
      ];

      this.movingPixelDirection =
        directions[Math.floor(Math.random() * directions.length)];
    }
  }

  internalMoveRequested(direction) {
    if (this.behaviour === BEHAVIOURS.IDLE) {
      this.spriteFacingDirection =
        this.spriteFacingDirection === DIRECTION_LEFT
          ? DIRECTION_RIGHT
          : DIRECTION_LEFT;
      this.updateFacingDirection();
      return;
    }
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

  checkForOverlapPlayer() {
    return null;
  }

  renderComponent() {
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? NPC_MAP[this.npc].LEFT
        : NPC_MAP[this.npc].RIGHT;
    return (
      <Body
        frameCoord={frameCoord}
        yTranslate={0}
        showShadow={this.small ? false : true}
        size={this.small ? 16 : 32}
      />
    );
  }
}
