import styles from "./InventoryVisual.module.css";
import Sprite from "../graphics/Sprite";
import { TILES } from "../../helpers/tiles";

const showInventory = [
  { key: "GOLD_KEY", tile: TILES.GOLD_KEY },
  { key: "SILVER_KEY", tile: TILES.SILVER_KEY },
  { key: "BLUE_KEY", tile: TILES.BLUE_KEY },
  { key: "SWORD", tile: TILES.SWORD },
  { key: "CAT_ICON", tile: TILES.CAT_ICON },
];
export default function InventoryVisual({ level }) {
  return (
    <div className={styles.inventory}>
      {showInventory
        .filter((i) => {
          return level.inventory.has(i.key, level.theme);
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
