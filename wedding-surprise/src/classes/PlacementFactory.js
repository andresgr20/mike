import { GiftPlacement } from "../game-objects/GiftPlacement";
import { PlayerPlacement } from "../game-objects/PlayerPlacement";
import { PLACEMENT_GIFT, PLACEMENT_PLAYER } from "../helpers/consts";

class PlacementFactory {
  createPlacement(config, level) {
    const instance = this.getInstance(config, level);

    return instance;
  }

  getInstance(config, level) {
    switch (config.type) {
      case PLACEMENT_PLAYER:
        return new PlayerPlacement(config, level);
      case PLACEMENT_GIFT:
        return new GiftPlacement(config, level);
      default:
        console.warn("no type found");
        return null;
    }
  }
}

export const placementFactory = new PlacementFactory();
