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

  // gift type chang
  renderComponent() {
    // need to add the coordinates of the gifts
    return <Sprite frameCoord={TILES.RED_GIFT} />;
  }
}
