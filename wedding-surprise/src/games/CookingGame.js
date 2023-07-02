import {
  LEVEL_THEMES,
  PLACEMENT_PLAYER,
  PLACEMENT_GIFT,
  PLACEMENT_WOOD,
  PLACEMENT_INTERACTIVE,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";

const game = {
  theme: LEVEL_THEMES.COOKING,
  score: 0,
  winningScore: 5,
  tilesWidth: 8,
  tilesHeight: 8,
  placements: [
    { x: 3, y: 3, type: PLACEMENT_WOOD },
    { x: 3, y: 4, type: PLACEMENT_WOOD },
    { x: 3, y: 5, type: PLACEMENT_WOOD },
    { x: 3, y: 6, type: PLACEMENT_WOOD },
    { x: 4, y: 3, type: PLACEMENT_WOOD },
    { x: 4, y: 4, type: PLACEMENT_WOOD },
    { x: 4, y: 5, type: PLACEMENT_WOOD },
    { x: 4, y: 6, type: PLACEMENT_WOOD },
    { x: 5, y: 3, type: PLACEMENT_WOOD },
    { x: 5, y: 4, type: PLACEMENT_WOOD },
    { x: 5, y: 5, type: PLACEMENT_WOOD },
    { x: 5, y: 6, type: PLACEMENT_WOOD },
    { x: 6, y: 3, type: PLACEMENT_WOOD },
    { x: 6, y: 4, type: PLACEMENT_WOOD },
    { x: 6, y: 5, type: PLACEMENT_WOOD },
    { x: 6, y: 6, type: PLACEMENT_WOOD },
    { x: 2, y: 2, type: PLACEMENT_PLAYER },
    { x: 2, y: 8, type: PLACEMENT_GIFT, tile: TILES.RED_GIFT },
    { x: 6, y: 8, type: PLACEMENT_GIFT, tile: TILES.YELLOW_GIFT },
    { x: 8, y: 8, type: PLACEMENT_GIFT, tile: TILES.YELLOW_GIFT }, //make a new colour
    { x: 4, y: 8, type: PLACEMENT_GIFT, tile: TILES.SPECIAL_GIFT },
    { x: 8, y: 5, type: PLACEMENT_INTERACTIVE, tile: TILES.WEDDING_CAKE },
    { x: 8, y: 6, type: PLACEMENT_INTERACTIVE, tile: TILES.CAT },
  ],
};

export default game;