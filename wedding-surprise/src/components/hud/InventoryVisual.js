import styles from "./InventoryVisual.module.css";
import Sprite from "../graphics/Sprite";
import { TILES } from "../../helpers/tiles";
import { LEVEL_THEMES } from "../../helpers/consts";

const showInventory = [
  { key: "GOLD_KEY", tile: TILES.GOLD_KEY },
  { key: "SILVER_KEY", tile: TILES.SILVER_KEY },
  { key: "BLUE_KEY", tile: TILES.BLUE_KEY },
  { key: LEVEL_THEMES.ZELDA, tile: TILES.SWORD },
  { key: LEVEL_THEMES.HIDING, tile: TILES.CAT_ICON },
];
export default function InventoryVisual({ level }) {
  return (
    <div className={styles.inventory}>
      {showInventory
        .filter((i) => {
          return level.inventory.has(i.key);
        })
        .map((i) => {
          return (
            <div key={i.key} className={styles.inventoryEntry}>
              <Sprite frameCoord={i.tile} />
            </div>
          );
        })}
    </div>
  );
}
