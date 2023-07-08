import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";

export class SolidPlacement extends Placement {
  isSolidForBody(_body) {
    return true;
  }

  renderComponent() {
    return <Sprite frameCoord={this.tile} />;
  }
}
