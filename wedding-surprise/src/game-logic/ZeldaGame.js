import { Camera } from "../classes/Camera";
import { Inventory } from "../classes/Inventory";
import { Level } from "../classes/Level";

export class ZeldaGame extends Level {
  start() {
    // this.inventory = new Inventory();
    // this.camera = new Camera(this);
    this.startGameLoop();
  }
}
