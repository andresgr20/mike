import {
  LEVEL_THEMES,
  PLACEMENT_PLAYER,
  PLACEMENT_GIFT,
} from "../helpers/consts";

const game = {
  theme: LEVEL_THEMES.WEDDING,
  tilesWidth: 8,
  tilesHeight: 8,
  placements: [
    { x: 2, y: 2, type: PLACEMENT_PLAYER },
    { x: 5, y: 5, type: PLACEMENT_GIFT },
  ],
};

export default game;
