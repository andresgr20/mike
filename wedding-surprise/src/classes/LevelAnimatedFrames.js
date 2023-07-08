import { TILES } from "../helpers/tiles";
import { PlacementTypeAnimationFrame } from "./PlacementTypeAnimationFrames";

const WATER_SEQUENCE = [TILES.WATER1, TILES.WATER2];
const WATER_FLOAT = 30;

const FLOWER_SEQUENCE = [TILES.FLOWERS1, TILES.FLOWERS2, TILES.FLOWERS3];
const FLOWER_FLOAT = 60;

export class LevelAnimatedFrames {
  constructor() {
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
    this.flowerFrames.tick();
    this.waterFrames.tick();
  }

  get getWaterFrame() {
    return this.waterFrames.activeFrame;
  }

  get getFlowerFrame() {
    return this.flowerFrames.activeFrame;
  }
}
