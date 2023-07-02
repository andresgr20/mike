import { KEYS } from "../helpers/consts";
import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";

export class LockPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? KEYS.BLUE;
    this.collectInFrames = 0;
  }

  isSolidForBody(_body) {
    return true;
  }

  tick() {
    if (this.collectInFrames > 0) {
      this.collectInFrames -= 1;
      if (this.collectInFrames === 0) {
        this.level.deletePlacemente(this);
      }
    }
  }

  canBeUnlocked() {
    const requiredKey = `KEY_${this.color}`;
    return this.level.inventory.has(requiredKey);
  }

  unlock() {
    if (this.collectInFrames > 0) {
      return;
    }
    this.collectInFrames = 11;
  }

  renderComponent() {
    const frameCoord = () => {
      switch (this.color) {
        case KEYS.BLUE:
          return TILES.BLUE_DOOR;
        case KEYS.WOODEN:
          return TILES.WOODEN_DOOR;
        default:
          return TILES.GOLD_DOOR;
      }
    };
    if (this.collectInFrames > 0) {
      frameCoord = TILES.UNLOCKED_DOOR;
    }
    <Sprite frameCoord={frameCoord} />;
  }
}
