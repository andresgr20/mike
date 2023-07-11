import styles from "./TopHud.module.css";
import ClockCount from "./ClockCount";
import InventoryVisual from "./InventoryVisual";
import GameScore from "./GameScore";

export default function TopHud({ level }) {
  return (
    <div className={styles.topHud}>
      <div className={styles.topHudLeft}>
        {level.time && <ClockCount level={level} />}
        <InventoryVisual level={level} />
        {level.score && <GameScore level={level} />}
      </div>
    </div>
  );
}
