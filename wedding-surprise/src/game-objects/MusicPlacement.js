import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { Z_INDEX_LAYER_SIZE } from "../helpers/consts";

export class MusicPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.frame = 1;
  }

  tick() {
    if (this.frame < 4) {
      this.frame += 0.05;
      return;
    }
    this.level.deletePlacement(this);
  }

  zIndex() {
    return this.y * Z_INDEX_LAYER_SIZE + 3;
  }

  renderComponent() {
    const frameCoord = `MUSIC_NOTE_${Math.floor(this.frame)}`;
    return <Sprite frameCoord={TILES[frameCoord]} />;
  }
}
