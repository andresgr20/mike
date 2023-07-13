import { useRecoilState, useSetRecoilState } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import { useKeyPress } from "../../hooks/useKeyPress";
import styles from "./PopUp.module.css";
import { currentMainInventoryAtom } from "../../atoms/currentMainInventoryAtom";

export default function GameCompleteMessage({ level }) {
  const [currentId, setCurrentId] = useRecoilState(currentLevelIdAtom);
  const setMainInventory = useSetRecoilState(currentMainInventoryAtom);
  const addCompleted = () => {
    setMainInventory((prevState) => [...prevState, level.theme]);
  };
  const handleNextLevel = () => {
    if (currentId !== "WeddingGame") {
      addCompleted();
      setCurrentId("WeddingGame");
    }
  };

  const endGame = currentId === "EndingGame";

  useKeyPress("Enter", () => {
    handleNextLevel();
  });

  return (
    <div className={styles.outerContainer}>
      {endGame && (
        <div className={styles.popupContainer}>
          <p className={styles.header}>Congrats you finished the game!</p>
          <div className={styles.text}>
            <p>
              You deserve a reward for keeping up with my shenanigans all these
              years.
            </p>
            <p>
              It's dangerous to go alone, take this Amazon Giftcard! Use it
              wisely :)
            </p>
            <a
              target="_blank"
              className={styles.notButton}
              href="https://onetimesecret.com/secret/jp6eqy1k6gjo3nrcb6souxew0mvxj12"
            >
              To Capitalism
            </a>
          </div>
        </div>
      )}
      {!endGame && (
        <div className={styles.popupContainer} onClick={handleNextLevel}>
          <div className={styles.header}>You won!</div>
          <p className={styles.text}>Go back to the wedding!</p>
        </div>
      )}
    </div>
  );
}
