import {
  LEVEL_THEMES,
  PLACEMENT_PLAYER,
  PLACEMENT_GIFT,
  PLACEMENT_WOOD,
  PLACEMENT_INTERACTIVE,
  PLACEMENT_FLOWERS,
  PLACEMENT_NPC,
  NPCS,
  PLACEMENT_SOLID,
  THEME_TILES_MAP,
  PLACEMENT_TILE,
  PLACEMENT_BUSH,
  PLACEMENT_KEY,
  PLACEMENT_LOCK,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";

// npc bug
const placements = [
  { x: 1, y: 11, type: PLACEMENT_PLAYER },
  { x: 3, y: 14, type: PLACEMENT_NPC, npc: NPCS.CAT, small: true },
  { x: 4, y: 17, type: PLACEMENT_NPC, npc: NPCS.BUNNY, small: true },
  { x: 4, y: 12, type: PLACEMENT_FLOWERS },
  { x: 5, y: 12, type: PLACEMENT_FLOWERS },
  { x: 6, y: 12, type: PLACEMENT_FLOWERS },
  { x: 7, y: 16, type: PLACEMENT_FLOWERS },
  { x: 8, y: 16, type: PLACEMENT_FLOWERS },
  { x: 9, y: 16, type: PLACEMENT_FLOWERS },
  { x: 2, y: 20, type: PLACEMENT_FLOWERS },
  { x: 1, y: 20, type: PLACEMENT_FLOWERS },
  { x: 6, y: 16, type: PLACEMENT_SOLID, tile: TILES.ROCK },
  { x: 7, y: 19, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 7, y: 20, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 7, y: 18, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 8, y: 19, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 8, y: 20, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 8, y: 18, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 9, y: 19, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 9, y: 20, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 9, y: 18, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 2, y: 14, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 2, y: 15, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 3, y: 14, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 3, y: 15, type: PLACEMENT_TILE, tile: TILES.FLOWER_PATCH },
  { x: 8, y: 12, type: PLACEMENT_BUSH },
  { x: 9, y: 12, type: PLACEMENT_BUSH },
  { x: 2, y: 21, type: PLACEMENT_KEY },
  { x: 11, y: 17, type: PLACEMENT_LOCK },
];
const createWalls = (total, wallType, startX, startY) => {
  let tile;
  switch (wallType) {
    case "TOP":
      tile = THEME_TILES_MAP[LEVEL_THEMES.ZELDA].TOP;
      break;
    case "BOTTOM":
      tile = THEME_TILES_MAP[LEVEL_THEMES.ZELDA].BOTTOM;
      break;
    case "LEFT":
      tile = THEME_TILES_MAP[LEVEL_THEMES.ZELDA].LEFT;
      break;
    case "RIGHT":
      tile = THEME_TILES_MAP[LEVEL_THEMES.ZELDA].RIGHT;
      break;
    default:
      tile = THEME_TILES_MAP[LEVEL_THEMES.ZELDA].FLOOR;
      break;
  }
  for (let i = 0; i <= total; i++) {
    let x, y;
    if (wallType == "TOP" || wallType == "BOTTOM") {
      x = startX + i;
      y = startY;
    }
    if (wallType == "LEFT" || wallType == "RIGHT") {
      x = startX;
      y = startY + i;
    }
    placements.push({
      x: x,
      y: y,
      type: PLACEMENT_SOLID,
      tile: tile,
    });
  }
};
createWalls(10, "TOP", 1, 10);
createWalls(10, "RIGHT", 12, 11);
createWalls(9, "TOP", 13, 13);
createWalls(7, "RIGHT", 23, 14);
createWalls(5, "RIGHT", 22, 1);
createWalls(8, "TOP", 22, 6);
createWalls(5, "RIGHT", 21, 7);
createWalls(8, "LEFT", 11, 1);

const game = {
  theme: LEVEL_THEMES.ZELDA,
  tilesWidth: 30,
  tilesHeight: 21,
  time: 900000,
  placements: placements,
};

export default game;
