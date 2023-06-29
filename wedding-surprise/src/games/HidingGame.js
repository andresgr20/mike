import {
  LEVEL_THEMES,
  PLACEMENT_PLAYER,
  PLACEMENT_BUSH,
} from "../helpers/consts";

const tiles = [{ x: 1, y: 1, type: PLACEMENT_PLAYER }];
const tilesWidth = 10;
const tilesHeight = 12;

const randomNumber = (bound) => Math.floor(Math.random() * bound) + 1;
const createBushes = (cap, boundX, boundY) => {
  let bushes = 0;
  while (bushes < cap) {
    const bush = {
      x: randomNumber(boundX),
      y: randomNumber(boundY),
      type: PLACEMENT_BUSH,
    };
    const duplicate = tiles.find((obj) => obj.x === bush.x && obj.y === bush.y);
    if (!duplicate) {
      tiles.push(bush);
      bushes++;
    }
  }
};

createBushes(25, tilesWidth, tilesHeight);

const game = {
  theme: LEVEL_THEMES.HIDING,
  tilesWidth: tilesWidth,
  tilesHeight: tilesHeight,
  score: 0,
  winningScore: 3,
  time: 180,
  placements: tiles,
};

export default game;
