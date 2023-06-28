export const CELL_SIZE = 16; // one grid cell in the map
export const Z_INDEX_LAYER_SIZE = 10;
export const SPRITE_SHEET_SRC = "/wedding-v5.png";
export const PLACEMENT_PLAYER = "PLAYER";
export const PLACEMENT_GIFT = "GIFT";
export const PLACEMENT_WOOD = "WOOD";
export const PLACEMENT_SOLID = "SOLID";
export const PLACEMENT_MUSIC = "MUSIC";
export const PLACEMENT_INTERACTIVE = "INTERACTIVE";

export const GAMEOVER_CLOCK = "CLOCK";
export const LEVEL_THEMES = {
  WEDDING: "WEDDING",
  COOKING: "COOKING",
  FIGHTING: "FIGHTING",
  WEED: "WEED",
  RUNNING: "RUNNING",
  HIDING: "HIDING",
};

export const MESSAGE_TYPES = {
  NEXT_GAME: "NEXT GAME",
  TEXT: "TEXT",
  GO_BACK: "GO BACK",
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
  [LEVEL_THEMES.COOKING]: "blue",
  [LEVEL_THEMES.FIGHTING]: "red",
  [LEVEL_THEMES.WEED]: "green",
  [LEVEL_THEMES.RUNNING]: "black",
  [LEVEL_THEMES.HIDING]: "#2d1a17",
};

export const directionUpdateMap = {
  [DIRECTION_DOWN]: { x: 0, y: -1 },
  [DIRECTION_UP]: { x: 0, y: 1 },
  [DIRECTION_LEFT]: { x: -1, y: 0 },
  [DIRECTION_RIGHT]: { x: 1, y: 0 },
};

export const PLAYER_1_RUN_1 = "PLAYER_1_RUN_1";
export const PLAYER_1_RUN_2 = "PLAYER_1_RUN_2";
export const PLAYER_2_RUN_1 = "PLAYER_2_RUN_1";
export const PLAYER_2_RUN_2 = "PLAYER_2_RUN_2";

// Sprite coords (y,x)
export const THEME_TILES_MAP = {
  [LEVEL_THEMES.WEDDING]: {
    FLOOR: "2x3",
    TOP: "2x2",
    LEFT: "1x3",
    RIGHT: "3x3",
    BOTTOM: "2x4",
  },
  [LEVEL_THEMES.HIDING]: {
    FLOOR: "6x3",
    TOP: "6x2",
    LEFT: "5x3",
    RIGHT: "7x3",
    BOTTOM: "6x4",
  },
};
