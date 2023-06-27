import {
  LEVEL_THEMES,
  PLACEMENT_PLAYER,
  PLACEMENT_INTERACTIVE,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";

const game = {
  theme: LEVEL_THEMES.HIDING,
  tilesWidth: 10,
  tilesHeight: 12,
  placements: [{ x: 1, y: 1, type: PLACEMENT_PLAYER }],
};

export default game;
