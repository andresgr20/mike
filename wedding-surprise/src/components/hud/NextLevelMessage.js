import { useRecoilState } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import { useKeyPress } from "../../hooks/useKeyPress";
import styles from "./PopUp.module.css";
import GamesMap from "../../games/GamesMap";

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
        <div>The next game is {level.nextLevelName}</div>
        <p>{level.nextLevelDescription}</p>
      </div>
    </div>
  );
}
