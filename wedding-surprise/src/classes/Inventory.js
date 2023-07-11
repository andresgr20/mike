export class Inventory {
  constructor() {
    this.inventoryMap = new Map();
  }

  has(key) {
    return Boolean(this.inventoryMap.has(key));
  }

  add(key) {
    if (!key) {
      return;
    }
    this.inventoryMap.set(key, true);
  }

  delete(key) {
    if (!key) {
      return;
    }
    this.inventoryMap.delete(key);
  }

  clear() {
    this.inventoryMap.clear();
  }
}
