import styles from "./RenderLevel.module.css";
import { THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import { useEffect, useState } from "react";
import { LevelState } from "../../classes/LevelState";
import LevelPlacementLayer from "./LevelPlacementsLayer";
import { useRecoilValue } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import GameCompleteMessage from "../hud/GameCompleteMessage";

export default function RenderLevel() {
  const [level, setLevel] = useState(null);
  const currentLevelId = useRecoilValue(currentLevelIdAtom);

  useEffect(() => {
    // Create and sub to state changes
    const levelState = new LevelState(currentLevelId, (newState) => {
      setLevel(newState);
    });

    // get initial state
    setLevel(levelState.getState());

    // Destory when compoennt unmounts
    return () => {
      levelState.destroy();
    };
  }, [currentLevelId]);

  if (!level) {
    return null;
  }
  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer level={level} />
        <LevelPlacementLayer level={level} />
        {level.isCompleted && <GameCompleteMessage />}
      </div>
    </div>
  );
}
