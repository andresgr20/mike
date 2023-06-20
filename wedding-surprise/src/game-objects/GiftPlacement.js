import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class GiftPlacement extends Placement {
  renderComponent() {
    // need to add the coordinates of the gifts
    return <Sprite frameCoord={TILES.CAT} />;
  }
}
