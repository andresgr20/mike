import { CELL_SIZE } from "../helpers/consts";
import {
  DIRECTION_RIGHT,
  DIRECTION_LEFT,
  DIRECTION_UP,
  DIRECTION_DOWN,
} from "../helpers/consts";

const CAMERA_SPEED = 0.02;
const CAMERA_LOOKAHEAD = 0;
const USE_SMOOTH_CAMERA = false;

export class Camera {
  constructor(level) {
    this.level = level;
    const [playerX, playerY] = this.level.playerRef.displayXYNoPx();
    this.cameraX = playerX;
    this.cameraY = playerY;
    this.transformOffset = -2.0 * CELL_SIZE;
  }

  get transformX() {
    return -this.cameraX - this.transformOffset + "px";
  }

  get transformY() {
    return -this.cameraY - this.transformOffset + "px";
  }

  static lerp(currentValue, destinationValue, time) {
    return currentValue * (1 - time) + destinationValue * time;
  }

  tick() {
    // Start where the player is now
    const player = this.level.playerRef;
    const [playerX, playerY] = player.displayXYNoPx();
    let cameraDestinationX = playerX;
    let cameraDestinationY = playerY;

    //If moving, put the camera slightly ahead of where player is going
    if (player.movingPixelRemaining > 0) {
      if (player.movingPixelDirection === DIRECTION_DOWN) {
        cameraDestinationY += CAMERA_LOOKAHEAD * CELL_SIZE;
      } else if (player.movingPixelDirection === DIRECTION_UP) {
        cameraDestinationY -= CAMERA_LOOKAHEAD * CELL_SIZE;
      } else if (player.movingPixelDirection === DIRECTION_LEFT) {
        cameraDestinationX -= CAMERA_LOOKAHEAD * CELL_SIZE;
      } else if (player.movingPixelDirection === DIRECTION_RIGHT) {
        cameraDestinationX += CAMERA_LOOKAHEAD * CELL_SIZE;
      }
    }

    if (USE_SMOOTH_CAMERA) {
      this.cameraX = Camera.lerp(
        this.cameraX,
        cameraDestinationX,
        CAMERA_SPEED
      );
      this.cameraY = Camera.lerp(
        this.cameraY,
        cameraDestinationY,
        CAMERA_SPEED
      );
    } else {
      this.cameraX = cameraDestinationX;
      this.cameraY = cameraDestinationY;
    }
  }
}
