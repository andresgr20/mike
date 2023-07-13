import styles from "./ClockCount.module.css";
import Sprite from "../graphics/Sprite";
import { TILES } from "../../helpers/tiles";
import PixelNumber from "./PixelNumbers";
export default function GameScore({ score }) {
  return (
    <div className={styles.clockCount}>
      <Sprite frameCoord={TILES.CAT_ICON} />
      <PixelNumber number={score} />
    </div>
  );
}
