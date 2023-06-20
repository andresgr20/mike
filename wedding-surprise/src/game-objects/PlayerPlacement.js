import { Placement } from "./Placement";
import Player from "../components/graphics/Player";
import { directionUpdateMap } from "../helpers/consts";

export class PlayerPlacement extends Placement {
  renderComponent() {
    return <Player />;
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

  controllerMoveRequested(direction) {
    if (this.movingPixelRemaining > 0) {
      return;
    }

    this.movingPixelRemaining = 16;
    this.movingPixelDirection = direction;
  }
  onDoneMoving() {
    const { x, y } = directionUpdateMap[this.movingPixelDirection];
    this.x += x;
    this.y += y;
  }
  tick() {
    this.tickMovingPixelProgress();
    console.log("hoi");
  }
}
