import { PLACEMENT_PLAYER } from "../helpers/consts";
import { DirectionControls } from "./DirectionControls";
import { GameLoop } from "./GameLoop";
import { placementFactory } from "./PlacementFactory";
import GamesMap from "../games/GamesMap";
import { Clock } from "./Clock";
import { LevelAnimatedFrames } from "./LevelAnimatedFrames";

export class Level {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;

    this.directionControls = new DirectionControls();

    this.animatedFrames = new LevelAnimatedFrames();

    // starts the level
    this.setUp();
  }

  setUp() {
    this.isCompleted = false;
    this.gameOver = false;
    const gamesData = GamesMap[this.id];
    this.theme = gamesData.theme;
    this.tilesWidth = gamesData.tilesWidth;
    this.tilesHeight = gamesData.tilesHeight;
    this.score = gamesData.score ?? null;
    this.time = gamesData.time ?? null;
    this.placements = gamesData.placements.map((config) => {
      return placementFactory.createPlacement(config, this);
    });
    // cache the location of the player
    this.heroRef = this.placements.find((p) => p.type === PLACEMENT_PLAYER);
    if (this.time) {
      this.clock = new Clock(gamesData.time, this);
    }
    this.start();
  }
  start() {}

  restart() {
    this.setUp();
  }

  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  tick() {
    if (this.directionControls.direction) {
      this.heroRef.controllerMoveRequested(this.directionControls.direction);
    }

    this.placements.forEach((placement) => {
      placement.tick();
    });

    this.animatedFrames.tick();
    this.clock.tick();

    this.onEmit(this.getState());
  }

  isPositionOutOfBounds(x, y) {
    return (
      x === 0 ||
      y === 0 ||
      x >= this.tilesWidth + 1 ||
      y >= this.tilesHeight + 1
    );
  }

  getState() {
    return {
      theme: this.theme,
      tilesWidth: this.tilesWidth,
      tilesHeight: this.tilesHeight,
      placements: this.placements,
      isCompleted: this.isCompleted,
      score: this.score,
      gameOver: this.gameOver,
      winningScore: this.winningScore,
      secondsRemaining: this.clock.secondsRemaining,
      time: this.time,
    };
  }

  addPlacement(config) {
    this.placements.push(placementFactory.createPlacement(config, this));
  }

  setGameOver() {
    this.gameOver = true;
    this.gameLoop.stop();
  }

  increaseScore() {
    this.score += 1;
  }

  deletePlacement(placementToRemove) {
    this.placements = this.placements.filter((p) => {
      return p.id !== placementToRemove.id;
    });
  }

  setCompleteLevel() {
    this.isCompleted = true;
    this.gameLoop.stop();
  }

  destroy() {
    this.gameLoop.stop();
    this.directionControls.unbind();
  }
}
