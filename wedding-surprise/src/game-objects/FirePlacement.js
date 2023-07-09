import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
export class FirePlacement extends Placement {
  isSolidForBody(_body) {
    return true;
  }
  renderComponent() {
    const activeFrame = this.level.animatedFrames.fireFrames.activeFrame;
    return <Sprite frameCoord={activeFrame} />;
  }
}
