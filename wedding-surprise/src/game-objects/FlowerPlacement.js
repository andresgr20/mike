import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
export class FlowerPlacement extends Placement {
  renderComponent() {
    const activeFrame = this.level.animatedFrames.flowerFrames.activeFrame;
    return <Sprite frameCoord={activeFrame} />;
  }
}
