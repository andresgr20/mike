import Body from "../components/graphics/Body";
import {
  DIRECTION_LEFT,
  NPCS,
  NPC_MAP,
  PLAYERS,
  playerSkinMapNew,
} from "../helpers/consts";
import { NPCPlacement } from "./NPCPlacement";

export class GoalNPCPlacement extends NPCPlacement {
  constructor(properties, level) {
    super(properties, level);
    this.goal = true;
    this.startAnimation = false;
  }

  completesLevelOnCollide() {
    return true;
  }

  renderComponent() {
    const key =
      PLAYERS.ALYSSA === this.level.player ? PLAYERS.MIKE : PLAYERS.ALYSSA;
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? playerSkinMapNew[key][this.level.theme]["GOAL"][0]
        : playerSkinMapNew[key][this.level.theme]["GOAL"][1];
    return (
      <div>
        <Body frameCoord={frameCoord} yTranslate={0} showShadow />
      </div>
    );
  }
}
