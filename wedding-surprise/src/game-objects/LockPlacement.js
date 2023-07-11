import { KEYS } from "../helpers/consts";
import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";

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
        this.level.deletePlacement(this);
      }
    }
  }

  canBeUnlocked() {
    const requiredKey = `${this.color}_KEY`;
    return this.level.inventory.has(requiredKey);
  }

  unlock() {
    const requiredKey = `${this.color}_KEY`;
    this.level.inventory.delete(requiredKey);
    if (this.collectInFrames > 0) {
      return;
    }
    this.collectInFrames = 11;
  }

  renderComponent() {
    let frameCoord = () => {
      switch (this.color) {
        case KEYS.BLUE:
          return TILES.BLUE_DOOR;
        case KEYS.SILVER:
          return TILES.SILVER_DOOR;
        default:
          return TILES.GOLD_DOOR;
      }
    };

    return <Sprite frameCoord={frameCoord()} />;
  }
}
