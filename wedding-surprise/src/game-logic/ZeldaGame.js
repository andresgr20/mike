import { Camera } from "../classes/Camera";
import { Inventory } from "../classes/Inventory";
import { Level } from "../classes/Level";
import GamesMap from "../games/GamesMap";

export class ZeldaGame extends Level {
  start() {
    this.inventory = new Inventory();
    this.camera = new Camera(this);
  }
}
