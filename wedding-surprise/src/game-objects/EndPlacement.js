import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { Placement } from "./Placement";

export class EndPlacement extends Placement {
  endsGameOnCollide() {
    return true;
  }

  renderComponent() {
    return (
      <div>
        <Sprite frameCoord={TILES.END} />
      </div>
    );
  }
}
