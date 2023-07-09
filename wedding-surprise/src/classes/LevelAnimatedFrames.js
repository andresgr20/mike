import { TILES } from "../helpers/tiles";
import { PlacementTypeAnimationFrame } from "./PlacementTypeAnimationFrames";

const WATER_SEQUENCE = [TILES.WATER1, TILES.WATER2];
const WATER_FLOAT = 30;

const FLOWER_SEQUENCE = [TILES.FLOWERS1, TILES.FLOWERS2, TILES.FLOWERS3];
const FLOWER_FLOAT = 60;

const FIRE_SEQUENCE = [TILES.FIRE1, TILES.FIRE2, TILES.FIRE3, TILES.FIRE4];
const FIRE_FLOAT = 60;

const TORCH_SEQUENCE = [TILES.TORCH1, TILES.TORCH2, TILES.TORCH3];
const TORCH_FLOAT = 60;

const FAIRY_SEQUENCE = [TILES.FAIRY1, TILES.FAIRY2, TILES.FAIRY3];
const FAIRY_FLOAT = 60;

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

    this.fireFrames = new PlacementTypeAnimationFrame(
      FIRE_SEQUENCE,
      FIRE_FLOAT
    );

    this.torchFrames = new PlacementTypeAnimationFrame(
      TORCH_SEQUENCE,
      TORCH_FLOAT
    );

    this.fairyFrames = new PlacementTypeAnimationFrame(
      FAIRY_SEQUENCE,
      FAIRY_FLOAT
    );
  }

  tick() {
    this.flowerFrames.tick();
    this.waterFrames.tick();
    this.fairyFrames.tick();
    this.torchFrames.tick();
    this.fireFrames.tick();
  }

  get getWaterFrame() {
    return this.waterFrames.activeFrame;
  }

  get getFlowerFrame() {
    return this.flowerFrames.activeFrame;
  }

  get getFireFrame() {
    return this.fireFrames.activeFrame;
  }

  get getFairyFrame() {
    return this.fairyFrames.activeFrame;
  }

  get getTorchFrame() {
    return this.torchFrames.activeFrame;
  }
}
