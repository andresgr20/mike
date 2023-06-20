export const CELL_SIZE = 16; // one grid cell in the map
export const SPRITE_SHEET_SRC = "/wedding-v1.png";
export const PLACEMENT_PLAYER = "PLAYER";
export const PLACEMENT_GIFT = "GIFT";
export const LEVEL_THEMES = {
  WEDDING: "WEDDING",
  CHASE: "CHASE",
  FOOD: "FOOD",
};

export const DIRECTION_LEFT = "LEFT";
export const DIRECTION_RIGHT = "RIGHT";
export const DIRECTION_UP = "UP";
export const DIRECTION_DOWN = "DOWN";

export const directionUpdateMap = {
  [DIRECTION_DOWN]: { x: 0, y: -1 },
  [DIRECTION_UP]: { x: 0, y: 1 },
  [DIRECTION_LEFT]: { x: -1, y: 0 },
  [DIRECTION_RIGHT]: { x: 1, y: 0 },
};

export const THEME_TILES_MAP = {
  [LEVEL_THEMES.WEDDING]: {
    FLOOR: "1x1",
    TOP: "1x0",
    LEFT: "0x1",
    RIGHT: "2x1",
    BOTTOM: "1x2",
    WALL: "0x2",
  },
  [LEVEL_THEMES.CHASE]: {
    FLOOR: "1x1",
    TOP: "1x0",
    LEFT: "0x1",
    RIGHT: "2x1",
    BOTTOM: "1x2",
    WALL: "0x2",
  },
  [LEVEL_THEMES.FOOD]: {
    FLOOR: "1x1",
    TOP: "1x0",
    LEFT: "0x1",
    RIGHT: "2x1",
    BOTTOM: "1x2",
    WALL: "0x2",
  },
};
