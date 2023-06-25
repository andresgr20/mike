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
        <Sprite frameCoord={frameCoord} size={36} />
      </div>
    </div>
  );
}
