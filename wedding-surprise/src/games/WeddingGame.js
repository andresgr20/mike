import {
  LEVEL_THEMES,
  PLACEMENT_PLAYER,
  PLACEMENT_GIFT,
  PLACEMENT_WOOD,
} from "../helpers/consts";

const game = {
  theme: LEVEL_THEMES.WEDDING,
  tilesWidth: 8,
  tilesHeight: 8,
  placements: [
    { x: 6, y: 4, type: PLACEMENT_WOOD },
    { x: 7, y: 4, type: PLACEMENT_WOOD },
    { x: 8, y: 4, type: PLACEMENT_WOOD },
    { x: 8, y: 3, type: PLACEMENT_WOOD },
    { x: 7, y: 3, type: PLACEMENT_WOOD },
    { x: 6, y: 3, type: PLACEMENT_WOOD },
    { x: 6, y: 2, type: PLACEMENT_WOOD },
    { x: 7, y: 2, type: PLACEMENT_WOOD },
    { x: 8, y: 2, type: PLACEMENT_WOOD },
    { x: 2, y: 2, type: PLACEMENT_PLAYER },
    { x: 5, y: 5, type: PLACEMENT_GIFT },
    { x: 7, y: 7, type: PLACEMENT_GIFT },
  ],
};

export default game;
