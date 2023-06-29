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

  doInteraction() {
    // would call text box wiuth the game id and pass th einfo a long
    // call the textbox, stop the game and show the message, with the hook to get to the next level
  }

  renderComponent() {
    return <Sprite frameCoord={this.tile} />;
  }
}
