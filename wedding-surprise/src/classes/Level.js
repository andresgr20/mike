import {
  LEVEL_THEMES,
  PLACEMENT_BUSH,
  PLACEMENT_PLAYER,
} from "../helpers/consts";
import { DirectionControls } from "./DirectionControls";
import { GameLoop } from "./GameLoop";
import { placementFactory } from "./PlacementFactory";
import GamesMap from "../games/GamesMap";
import { Clock } from "./Clock";
import { LevelAnimatedFrames } from "./LevelAnimatedFrames";
import { Inventory } from "./Inventory";
import { Camera } from "./Camera";

export class Level {
  constructor(levelId, onEmit, player) {
    this.id = levelId;
    this.onEmit = onEmit;

    this.directionControls = new DirectionControls();
    this.player = player;
    // starts the level
    this.start();
  }

  start() {
    this.isCompleted = false;
    this.gameOver = false;
    this.nextLevelId = null;
    this.nextLevelDescription = null;
    this.nextLevelName = null;
    this.gameOverReason = null;
    const gamesData = GamesMap[this.id];
    this.theme = gamesData.theme;
    this.tilesWidth = gamesData.tilesWidth;
    this.tilesHeight = gamesData.tilesHeight;
    this.score = gamesData.score ?? null;
    this.time = gamesData.time ?? null;
    this.placements = gamesData.placements.map((config) => {
      return placementFactory.createPlacement(config, this);
    });
    this.winningScore = gamesData.winningScore ?? null;
    this.inventory = new Inventory();
    this.animatedFrames = new LevelAnimatedFrames();

    // cache the location of the player
    this.playerRef = this.placements.find((p) => p.type === PLACEMENT_PLAYER);
    if (this.time) {
      this.clock = new Clock(gamesData.time, this);
    }

    this.camera = new Camera(this);

    if (LEVEL_THEMES.HIDING === this.theme) {
      this.startHidingGame();
    } else {
      this.startGameLoop();
    }
  }

  endGame() {
    this.isCompleted = true;
    this.gameLoop.stop();
  }

  changeLevel() {
    this.gameLoop.stop();
  }

  restart() {
    this.start();
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

    this.animatedFrames.tick();
    this.camera.tick();
    this.clock?.tick();

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
      gameOverReason: this.gameOverReason,
      score: this.score,
      gameOver: this.gameOver,
      winningScore: this.winningScore,
      secondsRemaining: this.secondsRemaining(),
      time: this.time,
      cameraTransformX: this.camera.transformX,
      cameraTransformY: this.camera.transformY,
      inventory: this.inventory,
      nextLevelId: this.nextLevelId,
      nextLevelName: this.nextLevelName,
      nextLevelDescription: this.nextLevelDescription,
      restart: () => this.restart(),
    };
  }

  addPlacement(config) {
    this.placements.push(placementFactory.createPlacement(config, this));
  }

  secondsRemaining() {
    return this.time ? this.clock.secondsRemaining : null;
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

  hideCat(prevPlacement = null) {
    this.cat = this.bushes[Math.floor(Math.random() * this.bushes.length)];
    if (prevPlacement) {
      while (prevPlacement.x === this.cat.x && this.cat.y === prevPlacement.y) {
        this.cat = this.bushes[Math.floor(Math.random() * this.bushes.length)];
      }
      prevPlacement.setCatHiddenHere();
    }
    this.cat.setCatHiddenHere();
  }

  catFound() {
    this.score += 1;
    if (this.score < this.winningScore) {
      this.hideCat(this.cat);
    } else {
      this.setCompleteLevel();
    }
  }

  startHidingGame() {
    this.bushes = this.placements.filter((p) => p.type === PLACEMENT_BUSH);
    // location where the cat is found
    this.hideCat();
    this.startGameLoop();
  }
  getTargetCoordinates() {
    return this.cat ? [this.cat.x, this.cat.y] : [9, 9];
  }

  setInventory(items) {
    items.forEach((item) => {
      if (!this.inventory.has(item)) {
        this.inventory.add(item);
      }
    });
  }
}
