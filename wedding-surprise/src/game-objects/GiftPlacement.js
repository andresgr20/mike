import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class GiftPlacement extends Placement {
  isSolidForBody(_body) {
    return true;
  }
  canBeInteracted(_body) {
    return true;
  }

  renderComponent() {
    return <Sprite frameCoord={this.tile} />;
  }
}
