import { TILES } from "../../helpers/tiles";
import Sprite from "./Sprite";
import styles from "./Player.module.css";

export default function Player({ frameCoord, yTranslate }) {
  return (
    <div className={styles.player}>
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div
        className={styles.playerBody}
        style={{
          transform: `translateY(${yTranslate}px)`,
        }}
      >
        {/* Need to change to 36, the characters need to be 36 */}
        <Sprite frameCoord={frameCoord} size={16} />
      </div>
    </div>
  );
}
