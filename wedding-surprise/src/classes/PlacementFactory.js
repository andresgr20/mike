import { GiftPlacement } from "../game-objects/GiftPlacement";
import { PlayerPlacement } from "../game-objects/PlayerPlacement";
import { PLACEMENT_GIFT, PLACEMENT_PLAYER } from "../helpers/consts";

const placementTypeClassMap = {
  [PLACEMENT_GIFT]: GiftPlacement,
  [PLACEMENT_PLAYER]: PlayerPlacement,
};
class PlacementFactory {
  createPlacement(config, level) {
    const placementClass = placementTypeClassMap[config.type];
    if (!placementClass) {
      console.warn("error", config.type);
    }

    const instance = new placementClass(config, level);
    instance.id = Math.floor(Math.random() * 9999999) + 1;
    return instance;
  }
}

export const placementFactory = new PlacementFactory();
