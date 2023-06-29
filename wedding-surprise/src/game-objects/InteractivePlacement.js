import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";

export class InteractivePlacement extends Placement {
  isSolidForBody(_body) {
    return true;
  }
  canBeInteracted(_body) {
    return true;
  }

  doInteraction() {
    // game
    // action with the thing
  }

  renderComponent() {
    return <Sprite frameCoord={this.tile} />;
  }
}
