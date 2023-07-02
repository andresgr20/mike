import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
export class WaterPlacement extends Placement {
  isSolidForBody(_body) {
    return true;
  }
  renderComponent() {
    const activeFrame = this.level.animatedFrames.waterFrames.activeFrame;
    return <Sprite frameCoord={activeFrame} />;
  }
}
