import { PLACEMENT_BUSH, PLACEMENT_PLAYER } from "../helpers/consts";
import { DirectionControls } from "./DirectionControls";
import { GameLoop } from "./GameLoop";
import { placementFactory } from "./PlacementFactory";
import GamesMap from "../games/GamesMap";
import { Clock } from "./Clock";

export class LevelState {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;

    this.directionControls = new DirectionControls();

    // starts the level
    this.start();
  }

  start() {
    this.isCompleted = false;
    this.gameOver = false;
    const gamesData = GamesMap[this.id];
    this.theme = gamesData.theme;
    this.tilesWidth = gamesData.tilesWidth;
    this.tilesHeight = gamesData.tilesHeight;
    this.score = gamesData.score ?? 0;
    this.time = gamesData.time ?? 0;
    this.winningScore = gamesData.winningScore ?? null;
    this.placements = gamesData.placements.map((config) => {
      return placementFactory.createPlacement(config, this);
    });

    // cache the location of the player
    this.playerRef = this.placements.find((p) => p.type === PLACEMENT_PLAYER);

    if (this.time) {
      this.clock = new Clock(gamesData.time, this);
    }

    this.startGameLoop();
  }

  getScore() {
    return this.score;
  }

  startGameLoop() {
    this.gameLoop?.stop();
    this.gameLoop = new GameLoop(() => {
      this.tick();
    });
  }

  tick() {
    if (this.directionControls.direction) {
      this.playerRef.controllerMoveRequested(this.directionControls.direction);
    }

    this.placements.forEach((placement) => {
      placement.tick();
    });

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
