import {
  LEVEL_THEMES,
  PLACEMENT_PLAYER,
  PLACEMENT_GIFT,
  PLACEMENT_WOOD,
  PLACEMENT_NPC,
  NPCS,
  BEHAVIOURS,
  PLACEMENT_SOLID,
  GIFTS,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";

const game = {
  theme: LEVEL_THEMES.ENDING,
  tilesWidth: 9,
  tilesHeight: 9,
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
    {
      x: 2,
      y: 8,
      type: PLACEMENT_GIFT,
      gift: GIFTS.RED_GIFT,
    },
    {
      x: 7,
      y: 8,
      type: PLACEMENT_GIFT,
      gift: GIFTS.YELLOW_GIFT,
    },
    { x: 4, y: 8, type: PLACEMENT_GIFT, gift: GIFTS.SPECIAL_GIFT },
    { x: 8, y: 5, type: PLACEMENT_SOLID, tile: TILES.WEDDING_CAKE },
    {
      x: 8,
      y: 6,
      type: PLACEMENT_NPC,
      npc: NPCS.CAT,
      behaviour: BEHAVIOURS.RANDOM,
      small: true,
    },
  ],
};

export default game;
