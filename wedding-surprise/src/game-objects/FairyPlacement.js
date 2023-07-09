import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
export class FairyPlacement extends Placement {
  renderComponent() {
    const activeFrame = this.level.animatedFrames.fairyFrames.activeFrame;
    return <Sprite frameCoord={activeFrame} />;
  }
}
