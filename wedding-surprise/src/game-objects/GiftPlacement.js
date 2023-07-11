import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { GIFTS } from "../helpers/consts";

export class GiftPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.nextLevelId = properties.nextLevelId;
    this.nextLevelName = properties.nextLevelName;
    this.nextLevelDescription = properties.nextLevelDescription;
    this.gift = properties.gift ?? GIFTS.RED_GIFT;
    switch (this.gift) {
      case GIFTS.RED_GIFT:
        this.nextLevelId = "ZeldaGame";
        this.nextLevelName = "a Zelda like game";
        this.nextLevelDescription =
          "You have to rescue your lover from the goblins!";
        break;
      case GIFTS.YELLOW_GIFT:
        this.nextLevelId = "HidingGame";
        this.nextLevelName = "a Hide and Seek game";
        this.nextLevelDescription = "You have to find Collen! She ran away!";
        break;
      default:
        this.nextLevelId = "EndingGame";
        this.nextLevelName = "You completed all the games";
        this.nextLevelDescription = "Go find your lover at the altar";
        break;
    }
  }

  nextLevelOnCollide() {
    if (this.gift !== GIFTS.SPECIAL_GIFT) {
      return true;
    }
    return (
      this.level.inventory.has("SWORD") && this.level.inventory.has("CAT_ICON")
    );
  }

  changeLevel() {
    this.level.nextLevelId = this.nextLevelId;
    this.level.nextLevelDescription = this.nextLevelDescription;
    this.level.nextLevelName = this.nextLevelName;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES[this.gift]} />;
  }
}
