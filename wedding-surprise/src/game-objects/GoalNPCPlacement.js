import Body from "../components/graphics/Body";
import { DIRECTION_LEFT, NPCS, NPC_MAP } from "../helpers/consts";
import { HeartPlacement } from "./HeartPlacement";
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
    const frameCoord =
      this.spriteFacingDirection === DIRECTION_LEFT
        ? NPC_MAP[NPCS.PRISONER].LEFT
        : NPC_MAP[NPCS.PRISONER].RIGHT;
    return (
      <div>
        <Body frameCoord={frameCoord} yTranslate={0} showShadow />
      </div>
    );
  }
}
