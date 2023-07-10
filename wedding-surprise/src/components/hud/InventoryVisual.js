import styles from "./InventoryVisual.module.css";
import Sprite from "../graphics/Sprite";
import { TILES } from "../../helpers/tiles";
export default function InventoryVisual({ level }) {
  const items = [...level.inventory.keys()];
  console.log(items);
  return (
    <div className={styles.inventoryVisual}>
      {items &&
        items.forEach((item) => {
          return <Sprite frameCoord={item} />;
        })}
    </div>
  );
}
