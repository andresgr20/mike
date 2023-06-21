import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class GiftPlacement extends Placement {
  // Trigger sounds on the dancefloor
  canBeInteracted(_body) {
    return true;
  }

  renderComponent() {
    // need to add the coordinates of the gifts
    return <Sprite frameCoord={TILES.WOODEN_FLOOR} />;
  }
}
