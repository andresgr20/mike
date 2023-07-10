export const CELL_SIZE = 16; // one grid cell in the map
export const Z_INDEX_LAYER_SIZE = 10;
export const SPRITE_SHEET_SRC = "/wedding-v6.png";
export const PLACEMENT_PLAYER = "PLAYER";
export const PLACEMENT_GIFT = "GIFT";
export const PLACEMENT_WOOD = "WOOD";
export const PLACEMENT_SOLID = "SOLID";
export const PLACEMENT_MUSIC = "MUSIC";
export const PLACEMENT_INTERACTIVE = "INTERACTIVE";
export const PLACEMENT_BUSH = "BUSH";
export const PLACEMENT_CAT = "CAT";
export const PLACEMENT_LOCK = "LOCK";
export const PLACEMENT_KEY = "KEY";
export const PLACEMENT_FLOWERS = "FLOWERS";
export const PLACEMENT_WATER = "WATER";
export const PLACEMENT_NPC = "NPC";
export const PLACEMENT_TILE = "TILE";
export const PLACEMENT_FIRE = "FIRE";
export const PLACEMENT_TORCH = "TORCH";
export const PLACEMENT_FAIRY = "FAIRY";
export const PLACEMENT_ENEMY = "ENEMY";
export const PLACEMENT_BOSS = "BOSS";
export const GAMEOVER_CLOCK = "CLOCK";

export const LEVEL_THEMES = {
  WEDDING: "WEDDING",
  ZELDA: "ZELDA",
  HIDING: "HIDING",
};

export const ENEMY = {
  GOBLIN_HAPPY: "GOBLIN_HAPPY",
  GOBLIN: "GOBLIN",
  GOBLIN_WEAPON: "GOBLIN_WEAPON",
};

export const BEHAVIOURS = {
  RANDOM: "RANDOM",
  HORIZONTAL: "HORIZONTAL",
  VERTICAL: "VERTICAL",
  IDLE: "IDLE",
};

export const KEYS = {
  GOLDEN: "GOLD",
  SILVER: "SILVER",
  BLUE: "BLUE",
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
  ZELDA: "ZELDA",
};

export const NPCS = {
  CAT: "CAT",
  BUNNY: "BUNNY",
  NPC1: "NPC1",
  NPC2: "NPC2",
};

export const THEME_BACKGROUNDS = {
  [LEVEL_THEMES.WEDDING]: "#696a6a",
  [LEVEL_THEMES.ZELDA]: "#2d1a17",
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
  [LEVEL_THEMES.ZELDA]: {
    FLOOR: "6x3",
    TOP: "6x2",
    LEFT: "5x3",
    RIGHT: "7x3",
    BOTTOM: "6x4",
  },
};

export const NPC_MAP = {
  [NPCS.CAT]: {
    RIGHT: "3x1",
    MOVE_RIGHT: "2x1",
    MOVE_LEFT: "1x0",
    LEFT: "1x1",
    IDLE: "3x1",
  },
  [NPCS.BUNNY]: {
    RIGHT: "10x4",
    MOVE_RIGHT: "11x4",
    MOVE_LEFT: "12x4",
    LEFT: "13x4",
    IDLE: "9x4",
  },
  [NPCS.NPC1]: {
    RIGHT: "2x11",
    MOVE_RIGHT: "6x11",
    MOVE_LEFT: "4x11",
    LEFT: "0x11",
    IDLE: "2x11",
  },
  [NPCS.NPC2]: {
    RIGHT: "2x13",
    MOVE_RIGHT: "6x13",
    MOVE_LEFT: "4x13",
    LEFT: "0x13",
    IDLE: "2x13",
  },
};

export const ENEMY_MAP = {
  [ENEMY.GOBLIN]: {
    RIGHT: "8x9",
    LEFT: "10x9",
    IDLE: "8x9",
    DEATH: "",
  },
  [ENEMY.GOBLIN_HAPPY]: {
    RIGHT: "8x15",
    LEFT: "10x15",
    IDLE: "8x15",
    DEATH: "",
  },
  [ENEMY.GOBLIN_WEAPON]: {
    RIGHT: "8x11",
    LEFT: "10x11",
    IDLE: "8x11",
    DEATH: "",
  },
};
