import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
export class TorchPlacement extends Placement {
  renderComponent() {
    const activeFrame = this.level.animatedFrames.torchFrames.activeFrame;
    return <Sprite frameCoord={activeFrame} />;
  }
}
