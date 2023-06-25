import {
  DIRECTION_DOWN,
  DIRECTION_LEFT,
  DIRECTION_RIGHT,
  DIRECTION_UP,
} from "../helpers/consts";

export class DirectionControls {
  constructor() {
    this.DirectionKeys = {
      ArrowDown: DIRECTION_UP,
      ArrowUp: DIRECTION_DOWN,
      ArrowLeft: DIRECTION_LEFT,
      ArrowRight: DIRECTION_RIGHT,
      s: DIRECTION_UP,
      w: DIRECTION_DOWN,
      a: DIRECTION_LEFT,
      d: DIRECTION_RIGHT,
    };
    this.heldDirections = [];

    this.directionKeyDownHandler = (e) => {
      const dir = this.DirectionKeys[e.key];
      if (dir && this.heldDirections.indexOf(dir) === -1) {
        this.heldDirections.unshift(dir);
      }
    };

    this.directionKeyUpnHandler = (e) => {
      const dir = this.DirectionKeys[e.key];
      const index = this.heldDirections.indexOf(dir);
      if (index > -1) {
        this.heldDirections.splice(index, 1);
      }
    };

    document.addEventListener("keydown", this.directionKeyDownHandler);
    document.addEventListener("keyup", this.directionKeyUpnHandler);
  }

  get direction() {
    return this.heldDirections[0];
  }

  unbind() {
    document.removeEventListener("keydown", this.directionKeyDownHandler);
    document.removeEventListener("keyup", this.directionKeyUpnHandler);
  }
}
