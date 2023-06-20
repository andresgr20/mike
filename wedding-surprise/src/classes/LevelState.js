import { LEVEL_THEMES, PLACEMENT_PLAYER } from "../helpers/consts";
import { DirectionControls } from "./DirectionControls";
import { GameLoop } from "./GameLoop";
import { placementFactory } from "./PlacementFactory";

export class LevelState {
  constructor(levelId, onEmit) {
    this.id = levelId;
    this.onEmit = onEmit;

    this.directionControls = new DirectionControls();

    // starts the level
    this.start();
  }

  start() {
    this.theme = LEVEL_THEMES.CHASE;
    this.tilesWidth = 8;
    this.tilesHeight = 8;
    this.placements = [{ id: 0, x: 2, y: 2, type: TILES.CAT }].map((config) => {
      return placementFactory.createPlacement(config, this);
    });

    // cache the location of the player
    this.heroRef = this.placements.find((p) => p.type === PLACEMENT_PLAYER);
    this.startGameLoop();
  }

  startGameLoop() {
    this.gameLoop?.stop;
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

    this.onEmit(this.getState());
  }
  getState() {
    return {
      theme: this.theme,
      tilesWidth: this.tilesWidth,
      tilesHeight: this.tilesHeight,
      placements: this.placements,
    };
  }

  destroy() {
    this.gameLoop.stop();
    this.directionControls.unbind();
  }
}
