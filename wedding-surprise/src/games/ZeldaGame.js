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
  KEYS,
  PLACEMENT_FIRE,
  PLACEMENT_FAIRY,
  PLACEMENT_WATER,
  PLACEMENT_TORCH,
  ENEMY,
  PLACEMENT_ENEMY,
  BEHAVIOURS,
  PLACEMENT_GOAL_NPC,
} from "../helpers/consts";
import { TILES } from "../helpers/tiles";

// npc bug
const placements = [
  // First Section
  { x: 1, y: 11, type: PLACEMENT_PLAYER },
  { x: 3, y: 14, type: PLACEMENT_NPC, npc: NPCS.CAT, small: true },
  { x: 4, y: 19, type: PLACEMENT_NPC, npc: NPCS.BUNNY, small: true },
  { x: 4, y: 12, type: PLACEMENT_FLOWERS },
  { x: 5, y: 12, type: PLACEMENT_FLOWERS },
  { x: 6, y: 12, type: PLACEMENT_FLOWERS },
  { x: 7, y: 16, type: PLACEMENT_FLOWERS },
  { x: 8, y: 16, type: PLACEMENT_FLOWERS },
  { x: 9, y: 16, type: PLACEMENT_FLOWERS },
  { x: 2, y: 20, type: PLACEMENT_FLOWERS },
  { x: 1, y: 20, type: PLACEMENT_FLOWERS },
  { x: 6, y: 16, type: PLACEMENT_SOLID, tile: TILES.ROCK },
  { x: 3, y: 12, type: PLACEMENT_FAIRY },
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
  { x: 6, y: 11, type: PLACEMENT_LOCK, color: KEYS.SILVER },
  // Village
  { x: 14, y: 14, type: PLACEMENT_NPC, npc: NPCS.NPC1 },
  { x: 20, y: 20, type: PLACEMENT_NPC, npc: NPCS.NPC2 },
  { x: 16, y: 17, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_BORDER },
  { x: 16, y: 16, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_TOP },
  { x: 16, y: 18, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_BOTTOM },
  {
    x: 17,
    y: 18,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_CENTER_BOTTOM,
  },
  {
    x: 17,
    y: 17,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_CENTER_BORDER,
  },
  { x: 17, y: 16, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_CENTER_TOP },
  { x: 18, y: 16, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_RIGHT_TOP },
  {
    x: 18,
    y: 17,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_RIGHT_BORDER,
  },
  {
    x: 18,
    y: 18,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_RIGHT_BOTTOM,
  },
  { x: 17, y: 17, type: PLACEMENT_FIRE },
  { x: 13, y: 20, type: PLACEMENT_SOLID, tile: TILES.LOGS },
  { x: 13, y: 21, type: PLACEMENT_SOLID, tile: TILES.LOGS },
  { x: 14, y: 20, type: PLACEMENT_SOLID, tile: TILES.LOGS },
  { x: 14, y: 21, type: PLACEMENT_SOLID, tile: TILES.LOGS },
  { x: 15, y: 20, type: PLACEMENT_SOLID, tile: TILES.LOGS },
  { x: 15, y: 21, type: PLACEMENT_SOLID, tile: TILES.LOGS },
  { x: 16, y: 16, type: PLACEMENT_SOLID, tile: TILES.SIGN_TEXT },
  { x: 18, y: 14, type: PLACEMENT_SOLID, tile: TILES.SIGN_TEXT },
  // Sanctuary
  { x: 13, y: 3, type: PLACEMENT_WATER },
  { x: 13, y: 4, type: PLACEMENT_WATER },
  { x: 13, y: 5, type: PLACEMENT_WATER },
  { x: 13, y: 6, type: PLACEMENT_WATER },
  { x: 13, y: 7, type: PLACEMENT_WATER },
  { x: 13, y: 8, type: PLACEMENT_WATER },
  { x: 14, y: 8, type: PLACEMENT_WATER },
  { x: 15, y: 8, type: PLACEMENT_WATER },
  { x: 16, y: 8, type: PLACEMENT_WATER },
  { x: 17, y: 8, type: PLACEMENT_WATER },
  { x: 18, y: 8, type: PLACEMENT_WATER },
  { x: 19, y: 8, type: PLACEMENT_WATER },
  { x: 14, y: 3, type: PLACEMENT_WATER },
  { x: 15, y: 3, type: PLACEMENT_WATER },
  { x: 16, y: 3, type: PLACEMENT_WATER },
  { x: 17, y: 3, type: PLACEMENT_WATER },
  { x: 18, y: 3, type: PLACEMENT_WATER },
  { x: 19, y: 3, type: PLACEMENT_WATER },
  { x: 19, y: 4, type: PLACEMENT_WATER },
  { x: 19, y: 5, type: PLACEMENT_WATER },
  { x: 19, y: 6, type: PLACEMENT_WATER },
  { x: 19, y: 7, type: PLACEMENT_WATER },
  { x: 15, y: 5, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_BORDER },
  { x: 15, y: 4, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_TOP },
  { x: 15, y: 6, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_BOTTOM },
  {
    x: 16,
    y: 6,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_CENTER_BOTTOM,
  },
  {
    x: 16,
    y: 5,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_CENTER_BORDER,
  },
  { x: 16, y: 4, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_CENTER_TOP },
  { x: 17, y: 4, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_RIGHT_TOP },
  {
    x: 17,
    y: 5,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_RIGHT_BORDER,
  },
  {
    x: 17,
    y: 6,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_RIGHT_BOTTOM,
  },
  {
    x: 16,
    y: 5,
    type: PLACEMENT_SOLID,
    tile: TILES.SWORD_STONE,
  },
  {
    x: 14,
    y: 5,
    type: PLACEMENT_FLOWERS,
  },
  {
    x: 14,
    y: 4,
    type: PLACEMENT_FLOWERS,
  },
  {
    x: 18,
    y: 5,
    type: PLACEMENT_FLOWERS,
  },
  {
    x: 18,
    y: 4,
    type: PLACEMENT_FLOWERS,
  },
  {
    x: 15,
    y: 4,
    type: PLACEMENT_FAIRY,
  },
  {
    x: 17,
    y: 4,
    type: PLACEMENT_FAIRY,
  },
  {
    x: 16,
    y: 7,
    type: PLACEMENT_TILE,
    tile: TILES.WOOD_BRIDGE_1,
  },
  {
    x: 16,
    y: 8,
    type: PLACEMENT_TILE,
    tile: TILES.WOOD_BRIDGE_2,
  },
  {
    x: 16,
    y: 9,
    type: PLACEMENT_TILE,
    tile: TILES.WOOD_BRIDGE_3,
  },
  {
    x: 19,
    y: 1,
    type: PLACEMENT_KEY,
    color: KEYS.SILVER,
  },
  {
    x: 12,
    y: 1,
    type: PLACEMENT_ENEMY,
    enemy: ENEMY.GOBLIN,
  },
  {
    x: 20,
    y: 3,
    type: PLACEMENT_ENEMY,
    enemy: ENEMY.GOBLIN,
    behaviour: BEHAVIOURS.VERTICAL,
  },
  // Goblin village
  {
    x: 5,
    y: 4,
    type: PLACEMENT_KEY,
    color: KEYS.GOLDEN,
  },
  {
    x: 4,
    y: 4,
    type: PLACEMENT_TORCH,
  },
  {
    x: 6,
    y: 4,
    type: PLACEMENT_TORCH,
  },
  {
    x: 3,
    y: 2,
    type: PLACEMENT_WATER,
  },
  {
    x: 3,
    y: 3,
    type: PLACEMENT_WATER,
  },
  {
    x: 3,
    y: 4,
    type: PLACEMENT_WATER,
  },
  {
    x: 3,
    y: 5,
    type: PLACEMENT_WATER,
  },
  {
    x: 3,
    y: 6,
    type: PLACEMENT_WATER,
  },
  {
    x: 4,
    y: 6,
    type: PLACEMENT_WATER,
  },
  {
    x: 5,
    y: 6,
    type: PLACEMENT_WATER,
  },
  {
    x: 6,
    y: 6,
    type: PLACEMENT_WATER,
  },
  {
    x: 7,
    y: 6,
    type: PLACEMENT_WATER,
  },
  {
    x: 7,
    y: 5,
    type: PLACEMENT_WATER,
  },
  {
    x: 7,
    y: 4,
    type: PLACEMENT_WATER,
  },
  {
    x: 4,
    y: 2,
    type: PLACEMENT_WATER,
  },
  {
    x: 6,
    y: 2,
    type: PLACEMENT_WATER,
  },
  {
    x: 7,
    y: 2,
    type: PLACEMENT_WATER,
  },
  {
    x: 7,
    y: 3,
    type: PLACEMENT_WATER,
  },
  {
    x: 5,
    y: 2,
    type: PLACEMENT_TILE,
    tile: TILES.WOOD_BRIDGE_2,
  },
  {
    x: 2,
    y: 5,
    type: PLACEMENT_ENEMY,
    enemy: ENEMY.GOBLIN_HAPPY,
    behaviour: BEHAVIOURS.HORIZONTAL,
  },
  {
    x: 8,
    y: 5,
    type: PLACEMENT_ENEMY,
    enemy: ENEMY.GOBLIN_HAPPY,
    behaviour: BEHAVIOURS.VERTICAL,
  },
  {
    x: 10,
    y: 3,
    type: PLACEMENT_ENEMY,
    enemy: ENEMY.GOBLIN_HAPPY,
    behaviour: BEHAVIOURS.VERTICAL,
  },
  {
    x: 9,
    y: 5,
    type: PLACEMENT_SOLID,
    tile: TILES.ROCK,
  },
  {
    x: 7,
    y: 7,
    type: PLACEMENT_ENEMY,
    enemy: ENEMY.GOBLIN_HAPPY,
  },
  {
    x: 5,
    y: 9,
    type: PLACEMENT_SOLID,
    tile: TILES.SIGN_BEWARE,
  },
  {
    x: 7,
    y: 9,
    type: PLACEMENT_SOLID,
    tile: TILES.SIGN_BEWARE,
  },
  // Battlefield
  {
    x: 24,
    y: 18,
    type: PLACEMENT_SOLID,
    tile: TILES.SIGN_BEWARE,
  },
  {
    x: 24,
    y: 16,
    type: PLACEMENT_SOLID,
    tile: TILES.SIGN_BEWARE,
  },
  {
    x: 24,
    y: 15,
    type: PLACEMENT_WATER,
  },
  {
    x: 24,
    y: 14,
    type: PLACEMENT_WATER,
  },
  {
    x: 25,
    y: 14,
    type: PLACEMENT_WATER,
  },
  {
    x: 25,
    y: 15,
    type: PLACEMENT_WATER,
  },
  {
    x: 26,
    y: 15,
    type: PLACEMENT_WATER,
  },
  {
    x: 26,
    y: 14,
    type: PLACEMENT_WATER,
  },
  {
    x: 29,
    y: 15,
    type: PLACEMENT_WATER,
  },
  {
    x: 29,
    y: 14,
    type: PLACEMENT_WATER,
  },
  {
    x: 30,
    y: 15,
    type: PLACEMENT_WATER,
  },
  {
    x: 30,
    y: 14,
    type: PLACEMENT_WATER,
  },
  { x: 26, y: 13, type: PLACEMENT_TORCH },
  { x: 29, y: 13, type: PLACEMENT_TORCH },
  { x: 28, y: 14, type: PLACEMENT_TILE, tile: TILES.WOOD_BRIDGE_2 },
  { x: 27, y: 14, type: PLACEMENT_TILE, tile: TILES.WOOD_BRIDGE_2 },
  { x: 27, y: 15, type: PLACEMENT_TILE, tile: TILES.WOOD_BRIDGE_2 },
  { x: 28, y: 15, type: PLACEMENT_TILE, tile: TILES.WOOD_BRIDGE_2 },
  {
    x: 29,
    y: 21,
    type: PLACEMENT_TILE,
    tile: TILES.GROUND_SPACE_CENTER_BORDER,
  },
  { x: 30, y: 21, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_RIGHT_BORDER },
  { x: 30, y: 20, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_RIGHT_TOP },
  { x: 29, y: 20, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_CENTER_TOP },
  { x: 28, y: 21, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_BORDER },
  { x: 28, y: 20, type: PLACEMENT_TILE, tile: TILES.GROUND_SPACE_LEFT_TOP },
  { x: 29, y: 21, type: PLACEMENT_FIRE },
  {
    x: 26,
    y: 16,
    type: PLACEMENT_ENEMY,
    enemy: ENEMY.GOBLIN_WEAPON,
    behaviour: BEHAVIOURS.VERTICAL,
  },
  { x: 30, y: 16, type: PLACEMENT_ENEMY, enemy: ENEMY.GOBLIN_WEAPON },
];
const createWalls = (total, wallType, startX, startY, skip = undefined) => {
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
    if (skip === i) {
      continue;
    }
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

const createPrison = () => {
  // Ground Tiles
  for (let i = 23; i <= 7 + 23; i++) {
    for (let y = 1; y <= 4 + 1; y++) {
      placements.push({
        x: i,
        y: y,
        type: PLACEMENT_TILE,
        tile: TILES.DIRT_FLOOR,
      });
    }
  }
  for (let i = 23; i <= 22 + 8; i++) {
    const tile = {
      x: i,
      y: 4,
      type: PLACEMENT_SOLID,
      tile: TILES.PRISON,
    };
    if (i === 27) {
      tile.type = PLACEMENT_LOCK;
      tile.color = KEYS.GOLDEN;
    }
    placements.push(tile);
  }
  placements.push({
    x: 24,
    y: 3,
    type: PLACEMENT_GOAL_NPC,
    behaviour: BEHAVIOURS.IDLE,
  });
};

createWalls(10, "TOP", 1, 10, 5);
createWalls(10, "RIGHT", 12, 11, 6);
createWalls(9, "TOP", 13, 13, 4);
createWalls(7, "RIGHT", 23, 14, 3);
createWalls(5, "RIGHT", 22, 1);
createWalls(8, "TOP", 22, 6, 5);
createWalls(5, "RIGHT", 21, 7);
createWalls(8, "LEFT", 11, 1);
createPrison();

const game = {
  theme: LEVEL_THEMES.ZELDA,
  tilesWidth: 30,
  tilesHeight: 21,
  time: 900000,
  placements: placements,
};

export default game;
