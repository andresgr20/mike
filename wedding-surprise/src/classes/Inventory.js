import { LEVEL_THEMES } from "../helpers/consts";

export class Inventory {
  constructor() {
    this.inventoryMap = new Map();
    Object.keys(LEVEL_THEMES).forEach((element) => {
      this.inventoryMap.set(element, new Map());
    });
    console.log(this.inventoryMap);
  }

  has(key, level) {
    return Boolean(this.inventoryMap.get(level).has(key));
  }

  add(key, level) {
    if (!key) {
      return;
    }
    this.inventoryMap.get(level).set(key, true);
  }

  delete(key, level) {
    if (!key) {
      return;
    }
    this.inventoryMap.get(level).delete(key);
  }

  clear(level) {
    this.inventoryMap.get(level).clear();
  }
}
