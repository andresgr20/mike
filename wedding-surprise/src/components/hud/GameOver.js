import { useKeyPress } from "../../hooks/useKeyPress";
import styles from "./PopUp.module.css";

export default function GameOver({ level }) {
  const handleRestart = () => {
    level.restart();
  };

  useKeyPress("Enter", () => {
    handleRestart();
  });

  return (
    <div className={styles.outerContainer}>
      <div className={styles.popupContainer} onClick={handleRestart}>
        <div className={styles.header}>Game Over</div>
        <p className={styles.text}>{level.gameOverReason} </p>
      </div>
    </div>
  );
}
