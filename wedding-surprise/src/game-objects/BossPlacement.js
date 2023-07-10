import { BEHAVIOURS } from "../helpers/consts";
import { EnemyPlacement } from "./EnemyPlacement";

export class BossPlacement extends EnemyPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.hp = 3;
    this.behaviour = BEHAVIOURS.RANDOM;
  }

  tickMoveAi() {
    this.checkForOverlapPlayer();
  }
  renderComponent() {
    return;
  }
}
