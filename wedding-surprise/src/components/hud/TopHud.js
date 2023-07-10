import styles from "./TopHud.module.css";
import ClockCount from "./ClockCount";

export default function TopHud({ level }) {
  return (
    <div className={styles.topHud}>
      <div className={styles.topHudLeft}>
        <ClockCount level={level} />
      </div>
      <div className={styles.topHudRight}>
        {/*<span>Come back to me</span>*/}
      </div>
    </div>
  );
}
