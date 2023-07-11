import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { Z_INDEX_LAYER_SIZE } from "../helpers/consts";

export class HeartPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.frame = 1;
  }

  tick() {
    if (this.frame < 4) {
      this.frame += 0.01;
      return;
    }
    this.level.deletePlacement(this);
  }

  zIndex() {
    return this.y * Z_INDEX_LAYER_SIZE + 3;
  }

  renderComponent() {
    const transform = `translateY(-16px)`;
    const frameCoord = `HEART_${Math.floor(this.frame)}`;
    return (
      <div style={{ position: "relative", transform: transform }}>
        <Sprite frameCoord={TILES[frameCoord]} />
      </div>
    );
  }
}
