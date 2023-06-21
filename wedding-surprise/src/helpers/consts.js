export const CELL_SIZE = 16; // one grid cell in the map
export const Z_INDEX_LAYER_SIZE = 10;
export const SPRITE_SHEET_SRC = "/wedding-v2.png";
export const PLACEMENT_PLAYER = "PLAYER";
export const PLACEMENT_GIFT = "GIFT";
export const LEVEL_THEMES = {
  WEDDING: "WEDDING",
};

export const DIRECTION_LEFT = "LEFT";
export const DIRECTION_RIGHT = "RIGHT";
export const DIRECTION_UP = "UP";
export const DIRECTION_DOWN = "DOWN";

export const BODY_SKINS = {
  NORMAL: "NORMAL",
};

export const THEME_BACKGROUNDS = {
  [LEVEL_THEMES.WEDDING]: "#696a6a",
};

export const directionUpdateMap = {
  [DIRECTION_DOWN]: { x: 0, y: -1 },
  [DIRECTION_UP]: { x: 0, y: 1 },
  [DIRECTION_LEFT]: { x: -1, y: 0 },
  [DIRECTION_RIGHT]: { x: 1, y: 0 },
};

export const PLAYER_RUN_1 = "PLAYER_RUN_1";
export const PLAYER_RUN_2 = "PLAYER_RUN_2";

// Sprite coords (y,x)
export const THEME_TILES_MAP = {
  [LEVEL_THEMES.WEDDING]: {
    FLOOR: "2x3",
    TOP: "2x2",
    LEFT: "1x3",
    RIGHT: "3x3",
    BOTTOM: "2x4",
  },
};
