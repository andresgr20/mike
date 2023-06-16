export const CELL_SIZE = 16; // one grid cell in the map
export const SPRITE_SHEET_SRC = "/wedding-v1.png";
export const LEVEL_THEMES = {
  WEDDING: "WEDDING",
  CHASE: "CHASE",
  FOOD: "FOOD",
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
