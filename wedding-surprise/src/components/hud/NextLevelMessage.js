import { useRecoilState } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import { useKeyPress } from "../../hooks/useKeyPress";
import styles from "./PopUp.module.css";
export default function NextLevelMessage({ level }) {
  const [currentId, setCurrentId] = useRecoilState(currentLevelIdAtom);

  const handleNextLevel = () => {
    setCurrentId(level.nextLevelId);
  };

  useKeyPress("Enter", () => {
    handleNextLevel();
  });

  return (
    <div className={styles.outerContainer}>
      <div className={styles.popupContainer} onClick={handleNextLevel}>
        <div className={styles.header}>{level.nextLevelName}</div>
        <p className={styles.text}>{level.nextLevelDescription}</p>
      </div>
    </div>
  );
}
