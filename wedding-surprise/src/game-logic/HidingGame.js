import { Level } from "../classes/Level";
import GamesMap from "../games/GamesMap";
import { PLACEMENT_BUSH } from "../helpers/consts";

export class HidingGame extends Level {
  start() {
    const gamesData = GamesMap[this.id];
    this.time = gamesData.time;
    this.winningScore = gamesData.winningScore;
    this.bushes = this.placements.filter((p) => p.type === PLACEMENT_BUSH);
    // location where the cat is found
    this.hideCat();
    this.startGameLoop();
  }

  // hides the cat randommly in the bushes
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
      this.inventory.add("CAT_ICON", "WEDDING");
      this.setCompleteLevel();
    }
  }

  getTargetCoordinates() {
    return this.cat ? [this.cat.x, this.cat.y] : [9, 9];
  }
}
