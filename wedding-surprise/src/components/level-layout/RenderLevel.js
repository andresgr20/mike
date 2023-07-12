import styles from "./RenderLevel.module.css";
import { LEVEL_THEMES, THEME_BACKGROUNDS } from "../../helpers/consts";
import LevelBackgroundTilesLayer from "./LevelBackgroundTilesLayer";
import { useEffect, useState } from "react";
import LevelPlacementLayer from "./LevelPlacementsLayer";
import { useRecoilValue } from "recoil";
import { currentLevelIdAtom } from "../../atoms/currentLevelIdAtom";
import GameCompleteMessage from "../hud/GameCompleteMessage";
import soundsManager, { MUSIC } from "../../classes/Sounds";
import GameOver from "../hud/GameOver";
import TopHud from "../hud/TopHud";
import { currentMainInventoryAtom } from "../../atoms/currentMainInventoryAtom";
import { Level } from "../../classes/Level";
import NextLevelMessage from "../hud/NextLevelMessage";
export default function RenderLevel({ player }) {
  const [level, setLevel] = useState(null);
  const currentLevelId = useRecoilValue(currentLevelIdAtom);
  const currentMainInventory = useRecoilValue(currentMainInventoryAtom);

  useEffect(() => {
    const levelState = new Level(
      currentLevelId,
      (newState) => {
        setLevel(newState);
      },
      player
    );

    // get initial state
    setLevel(levelState.getState());

    levelState.setInventory(currentMainInventory);
    switch (levelState.getState().theme) {
      case LEVEL_THEMES.WEDDING:
        soundsManager.playMusic(MUSIC.DANCEFLOOR);
        break;
      case LEVEL_THEMES.ENDING:
        soundsManager.playMusic(MUSIC.ENDING);
        break;
      default:
        break;
    }
    // Destory when compoennt unmounts
    return () => {
      levelState.destroy();
    };
  }, [currentLevelId, currentMainInventory, player]);

  if (!level) {
    return null;
  }
  const cameraTranslate = `translate3d(${level.cameraTransformX}, ${level.cameraTransformY}, 0)`;

  return (
    <div
      className={styles.fullScreenContainer}
      style={{
        background: THEME_BACKGROUNDS[level.theme],
      }}
    >
      <div className={styles.gameScreen}>
        <div
          style={{
            transform: cameraTranslate,
          }}
        >
          <LevelBackgroundTilesLayer level={level} />
          <LevelPlacementLayer level={level} />
        </div>
      </div>
      <TopHud level={level} />
      {level.isCompleted && <GameCompleteMessage level={level} />}
      {level.gameOver && <GameOver level={level} />}
      {level.nextLevelId && <NextLevelMessage level={level} />}
    </div>
  );
}
