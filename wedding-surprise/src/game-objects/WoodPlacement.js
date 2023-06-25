import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";

export class WoodPlacement extends Placement {
  // Trigger sounds on the dancefloor
  //   canBeInteracted(_body) {
  //     return true;
  //   }

  //   isSolidForBody(_body) {
  //     return false;
  //   }
  canAddMusicEffect(_body) {
    return true;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES.WOODEN_FLOOR} />;
  }
}
