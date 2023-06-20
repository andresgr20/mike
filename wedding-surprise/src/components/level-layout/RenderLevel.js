import styles from "./RenderLevel.module.css";
import Sprite from "../graphics/Sprite";
import { CELL_SIZE } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import { useEffect } from "react";
import { LevelState } from "../../classes/LevelState";
import LevelPlacementLayer from "./LevelPlacementsLayer";
export default function RenderLevel() {
  //   const level = {
  //     theme: "WEDDING",
  //     tilesWidth: 7,
  //     tilesHeight: 7,
  //     placements: [
  //       { id: 0, x: 0, y: 2, frameCoord: "0x2" },
  //       { id: 1, x: 1, y: 0, frameCoord: "1x0" },
  //       { id: 2, x: 0, y: 3, frameCoord: "0x3" },
  //       { id: 3, x: 0, y: 4, frameCoord: "0x4" },
  //       { id: 4, x: 0, y: 0, frameCoord: "0x0" },
  //       { id: 5, x: 1, y: 1, frameCoord: "1x1" },
  //       { id: 6, x: 0, y: 0, frameCoord: "1x2" },
  //       { id: 7, x: 0, y: 0, frameCoord: "2x4" },
  //     ],
  //   };

  const [level, setLevel] = useState(null);

  useEffect(() => {
    // Create and sub to state changes
    const levelState = new LevelState("1-1", (newState) => {
      setLevel(newState);
    });

    // get initial state
    setLevel(levelState.getState());

    // Destory when compoennt unmouinds

    return () => {
      levelState.destroy();
    };
  }, []);

  if (!level) {
    return null;
  }
  return (
    <div className={styles.fullScreenContainer}>
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer level={level} />
        <LevelPlacementLayer level={level} />
        {/* {level.placements.map((element) => {
          const x = element.x * CELL_SIZE + "px";
          const y = element.y * CELL_SIZE + "px";
          const style = {
            position: "absolute",
            transform: `translate3d(${x}, ${y}, 0)`,
          };
          return (
            <div key={element.id} style={style}>
              <Sprite frameCoord={element.frameCoord} />
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
