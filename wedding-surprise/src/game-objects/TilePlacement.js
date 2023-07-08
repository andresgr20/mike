import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";

export class TilePlacement extends Placement {
  renderComponent() {
    return <Sprite frameCoord={this.tile} />;
  }
}
