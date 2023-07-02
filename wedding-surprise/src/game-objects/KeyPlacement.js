import ElevatedSprite from "../components/graphics/ElevatedSprite";
import { KEYS } from "../helpers/consts";
import { TILES } from "../helpers/tiles";
import { Placement } from "./Placement";

export class KeyPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.color = properties.color ?? KEYS.BLUE;
  }
  addsItemsToInventoryOnCollide() {
    return `KEY_${this.color}`;
  }

  renderComponent() {
    const frameCoord = () => {
      switch (this.color) {
        case KEYS.BLUE:
          return TILES.BLUE_KEY;
        case KEYS.WOODEN:
          return TILES.WOODEN_KEY;
        default:
          return TILES.GOLD_KEY;
      }
    };
    return <ElevatedSprite frameCoord={frameCoord} />;
  }
}
