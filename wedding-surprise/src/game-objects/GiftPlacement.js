import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";
import { GIFTS, LEVEL_THEMES } from "../helpers/consts";

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
        this.nextLevelName = "The next game is a Zelda like game";
        this.nextLevelDescription =
          "You have to rescue your lover from the goblins! Do not let them touch you";
        this.nextLevelInstructions =
          "Venture out and avoid the goblins! Gotta rescue your babe";
        break;
      case GIFTS.YELLOW_GIFT:
        this.nextLevelId = "HidingGame";
        this.nextLevelName = "The next game is a Hide and Seek game";
        this.nextLevelDescription = "You have to find Colette! She ran away!";
        this.nextLevelInstructions =
          "Find Colette in the bushes! She will meow louder the closer you get";
        break;
      default:
        this.nextLevelId = "EndingGame";
        this.nextLevelName = "You completed all the games";
        this.nextLevelDescription =
          "Go find your lover at the altar. You better say yes.";
        break;
    }
  }

  nextLevelOnCollide() {
    if (this.gift !== GIFTS.SPECIAL_GIFT) {
      return true;
    }
    return (
      this.level.inventory.has(LEVEL_THEMES.HIDING) &&
      this.level.inventory.has(LEVEL_THEMES.ZELDA)
    );
  }

  changeLevel() {
    this.level.nextLevelId = this.nextLevelId;
    this.level.nextLevelDescription = this.nextLevelDescription;
    this.level.nextLevelName = this.nextLevelName;
    this.level.nextLevelInstructions = this.nextLevelInstructions;
  }

  renderComponent() {
    return <Sprite frameCoord={TILES[this.gift]} />;
  }
}
