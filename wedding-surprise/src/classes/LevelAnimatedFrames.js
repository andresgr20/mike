import { TILES } from "..helper/tiles";
import { PlacementTypeAnimationFrame } from "./PlacementTypeAnimationFrames";

const LOCK_SEQUENCE = [TILES.LOCK1, TILES.LOCK2];
const LOCK_FLOAT = 30;

const WATER_SEQUENCE = [TILES.WATER1, TILES.WATER2];
const WATER_FLOAT = 30;

const FLOWER_SEQUENCE = [TILES.FLOWERS1, TILES.FLOWERS2, TILES.FLOWERS2];
const FLOWER_FLOAT = 60;

export class LevelAnimatedFrames {
  constructor() {
    this.lockFrames = new PlacementTypeAnimationFrame(
      LOCK_SEQUENCE,
      LOCK_FLOAT
    );

    this.waterFrames = new PlacementTypeAnimationFrame(
      WATER_SEQUENCE,
      WATER_FLOAT
    );

    this.flowerFrames = new PlacementTypeAnimationFrame(
      FLOWER_SEQUENCE,
      FLOWER_FLOAT
    );
  }

  tick() {
    this.lockFrames.tick();
    this.flowerFrames.tick();
    this.waterFrames.tick();
  }

  get getLockFrame() {
    return this.lockFrames.activeFrame;
  }

  get getWaterFrame() {
    return this.waterFrames.activeFrame;
  }

  get getFlowerFrame() {
    return this.flowerFrames.activeFrame;
  }
}
