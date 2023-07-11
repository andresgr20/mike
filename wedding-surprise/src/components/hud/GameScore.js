import styles from "./ClockCount.module.css";
import Sprite from "../graphics/Sprite";
import { TILES } from "../../helpers/tiles";
import PixelNumber from "./PixelNumbers";
export default function GameScore({ level }) {
  return (
    <div className={styles.clockCount}>
      <Sprite frameCoord={TILES.CAT_ICON} />
      <PixelNumber number={level.score} />
    </div>
  );
}
