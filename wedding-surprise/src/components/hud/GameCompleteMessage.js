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

  useKeyPress("Enter", () => {
    handleNextLevel();
  });

  return (
    <div className={styles.outerContainer}>
      <div className={styles.popupContainer} onClick={handleNextLevel}>
        <div>You won!</div>
        <p>Go back to the wedding!</p>
      </div>
    </div>
  );
}
