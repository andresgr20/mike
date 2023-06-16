import { CELL_SIZE } from "../../helpers/consts";
import Sprite from "../graphics/Sprite";

export default function MapCell({ x, y, frameCoord, image }) {
  return (
    <div
      style={{
        position: "absolute",
        left: x * CELL_SIZE,
        top: y * CELL_SIZE,
      }}
    >
      <Sprite frameCoord={frameCoord} image={image} />
    </div>
  );
}
