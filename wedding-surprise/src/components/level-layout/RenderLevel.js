import styles from "./RenderLevel.module.css";
import { LEVEL_THEMES, THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import { useEffect, useState } from "react";
import { LevelState } from "../../classes/LevelState";
import LevelPlacementLayer from "./LevelPlacementsLayer";
import { useRecoilValue } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import GameCompleteMessage from "../hud/GameCompleteMessage";
import soundManager, { MUSIC } from "../../classes/Sounds";
import GameScore from "../hud/GameScore";
import ClockCount from "../hud/ClockCount";
import { HidingGame } from "../../game-logic/HidingGame";

export default function RenderLevel() {
  const [level, setLevel] = useState(null);
  // would need to use an atom to save the values when going back to the other games
  const currentLevelId = useRecoilValue(currentLevelIdAtom);

  useEffect(() => {
    // Create and sub to state changes
    const levelState = new HidingGame(currentLevelId, (newState) => {
      setLevel(newState);
    });

    // get initial state
    setLevel(levelState.getState());

    switch (levelState.getState().theme) {
      case LEVEL_THEMES.WEDDING:
        soundManager.playMusic(MUSIC.DANCEFLOOR);
        break;
      default:
        break;
    }
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
      <GameScore level={level} />
      {level.time && <ClockCount level={level} />}
      <div className={styles.gameScreen}>
        <LevelBackgroundTilesLayer level={level} />
        <LevelPlacementLayer level={level} />
        {level.isCompleted && <GameCompleteMessage />}
      </div>
    </div>
  );
}
