import { BushPlacement } from "../game-objects/BushPlacement";
import { GiftPlacement } from "../game-objects/GiftPlacement";
import { InteractivePlacement } from "../game-objects/InteractivePlacement";
import { MusicPlacement } from "../game-objects/MusicPlacement";
import { PlayerPlacement } from "../game-objects/PlayerPlacement";
import { WoodPlacement } from "../game-objects/WoodPlacement";
import { LockPlacement } from "../game-objects/LockPlacement";
import { KeyPlacement } from "../game-objects/KeyPlacement";
import {
  PLACEMENT_GIFT,
  PLACEMENT_MUSIC,
  PLACEMENT_PLAYER,
  PLACEMENT_WOOD,
  PLACEMENT_INTERACTIVE,
  PLACEMENT_BUSH,
  PLACEMENT_LOCK,
  PLACEMENT_KEY,
  PLACEMENT_FLOWERS,
  PLACEMENT_WATER,
  PLACEMENT_NPC,
  PLACEMENT_TILE,
  PLACEMENT_SOLID,
} from "../helpers/consts";
import { FlowerPlacement } from "../game-objects/FlowerPlacement";
import { NPCPlacement } from "../game-objects/NPCPlacement";
import { TilePlacement } from "../game-objects/TilePlacement";
import { SolidPlacement } from "../game-objects/SolidPlacement";

const placementTypeClassMap = {
  [PLACEMENT_GIFT]: GiftPlacement,
  [PLACEMENT_PLAYER]: PlayerPlacement,
  [PLACEMENT_WOOD]: WoodPlacement,
  [PLACEMENT_MUSIC]: MusicPlacement,
  [PLACEMENT_INTERACTIVE]: InteractivePlacement,
  [PLACEMENT_BUSH]: BushPlacement,
  [PLACEMENT_KEY]: KeyPlacement,
  [PLACEMENT_LOCK]: LockPlacement,
  [PLACEMENT_FLOWERS]: FlowerPlacement,
  [PLACEMENT_NPC]: NPCPlacement,
  [PLACEMENT_TILE]: TilePlacement,
  [PLACEMENT_SOLID]: SolidPlacement,
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
