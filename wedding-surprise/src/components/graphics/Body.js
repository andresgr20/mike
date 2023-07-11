import { TILES } from "../../helpers/tiles";
import Sprite from "./Sprite";
import styles from "./Player.module.css";

export default function Body({
  frameCoord,
  yTranslate,
  showShadow,
  size = 32,
}) {
  return (
    <div className={styles.player}>
      <div>{showShadow && <Sprite frameCoord={TILES.SHADOW} />}</div>
      {size === 32 ? (
        <div
          className={styles.playerBody}
          style={{
            transform: `translateY(${yTranslate}px)`,
          }}
        >
          <Sprite frameCoord={frameCoord} size={size} />
        </div>
      ) : (
        <div>
          {" "}
          <Sprite frameCoord={frameCoord} size={size} />
        </div>
      )}
    </div>
  );
}
