import { GiftPlacement } from "../game-objects/GiftPlacement";
import { MusicPlacement } from "../game-objects/MusicPlacement";
import { PlayerPlacement } from "../game-objects/PlayerPlacement";
import { WoodPlacement } from "../game-objects/WoodPlacement";
import {
  PLACEMENT_GIFT,
  PLACEMENT_MUSIC,
  PLACEMENT_PLAYER,
  PLACEMENT_WOOD,
} from "../helpers/consts";

const placementTypeClassMap = {
  [PLACEMENT_GIFT]: GiftPlacement,
  [PLACEMENT_PLAYER]: PlayerPlacement,
  [PLACEMENT_WOOD]: WoodPlacement,
  [PLACEMENT_MUSIC]: MusicPlacement,
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
