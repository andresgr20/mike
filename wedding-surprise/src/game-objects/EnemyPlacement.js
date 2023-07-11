import Body from "../components/graphics/Body";
import { DIRECTION_LEFT, ENEMY, ENEMY_MAP } from "../helpers/consts";
import { NPCPlacement } from "./NPCPlacement";

export class EnemyPlacement extends NPCPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.hp = 1;
    this.enemy = properties.enemy ?? ENEMY.GOBLIN;
  }
  checkForOverlapPlayer() {
    const [myX, myY] = this.displayXY();
    const [playerX, playerY] = this.level.playerRef.displayXY();
    const xDiff = Math.abs(myX - playerX);
    const yDiff = Math.abs(myY - playerY);
    if (xDiff <= 2 && yDiff <= 2) {
      this.level.setGameover();
    }
  }

  canTakeDamage() {
    // First do the attack animation
    // Need to determine the Collision
  }

  triggerDeath() {
    //remove placement
    // change the france to death
    // determine if this was a killable enemy or no
  }

  renderComponent() {
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? ENEMY_MAP[this.enemy].LEFT
        : ENEMY_MAP[this.enemy].RIGHT;
    return <Body frameCoord={frameCoord} yTranslate={0} />;
  }
}
