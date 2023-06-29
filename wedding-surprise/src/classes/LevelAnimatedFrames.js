import { TILES } from "..helper/tiles";
import { PlacementTypeAnimationFrame } from "./PlacementTypeAnimationFrames";

const LOCK_SEQUENCE = [TILES.LOCK1, TILES.LOCK2];
const LOCK_FLOAT = 30;

export class LevelAnimatedFrames {
  constructor() {
    this.lockFrames = new PlacementTypeAnimationFrame(
      LOCK_SEQUENCE,
      LOCK_FLOAT
    );
  }

  tick() {
    this.lockFrames.tick();
  }

  get getLockFrame() {
    return this.lockFrames.activeFrame;
  }
}
