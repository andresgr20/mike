import styles from "./RenderLevel.module.css";
import Sprite from "../graphics/Sprite";
import { CELL_SIZE } from "../../helpers/consts";

export default function RenderLevel({ spriteSheetImage }) {
  const level = {
    placements: [
      { id: 0, x: 0, y: 2, frameCoord: "0x2" },
      { id: 1, x: 1, y: 0, frameCoord: "1x0" },
      { id: 2, x: 0, y: 3, frameCoord: "0x3" },
      { id: 3, x: 0, y: 4, frameCoord: "0x4" },
      { id: 4, x: 0, y: 0, frameCoord: "0x0" },
      { id: 5, x: 1, y: 1, frameCoord: "1x1" },
      { id: 6, x: 0, y: 0, frameCoord: "1x2" },
      { id: 7, x: 0, y: 0, frameCoord: "2x4" },
    ],
  };
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.gameScreen}>
        {level.placements.map((element) => {
          const x = element.x * CELL_SIZE + "px";
          const y = element.y * CELL_SIZE + "px";
          const style = {
            position: "absolute",
            transform: `translate3d(${x}, ${y}, 0)`,
          };
          return (
            <div key={element.id} style={style}>
              <Sprite
                image={spriteSheetImage}
                frameCoord={element.frameCoord}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
