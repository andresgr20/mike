import { HidingGame } from "../game-logic/HidingGame";
import { ZeldaGame } from "../game-logic/ZeldaGame";
import { LEVEL_THEMES } from "../helpers/consts";
import { Level } from "./Level";

const placementTypeClassMap = {
  [LEVEL_THEMES.ZELDA]: ZeldaGame,
  [LEVEL_THEMES.HIDING]: HidingGame,
  [LEVEL_THEMES.WEDDING]: Level,
  [LEVEL_THEMES.ENDING]: Level,
};

class LevelFactory {
  createLevel(level) {
    const levelClass = placementTypeClassMap[level];
    if (!placementClass) {
      console.warn("error", config.type);
    }

    const instance = new levelClass(level);
    instance.id = Math.floor(Math.random() * 9999999) + 1;
    return instance;
  }
}

export const levelFactory = new LevelFactory();
