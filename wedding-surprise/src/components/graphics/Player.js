import { TILES } from "../../helpers/tiles";
import Sprite from "./Sprite";
import styles from "./Player.module.css";

export default function Player() {
  return (
    <div className={styles.player}>
      <div>
        <Sprite frameCoord={TILES.SHADOW} />
      </div>
      <div className={styles.playerBody}>
        <Sprite frameCoord={TILES.PLAYER_RIGHT} size={32} />
      </div>
    </div>
  );
}
