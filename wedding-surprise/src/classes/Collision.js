export class Collision {
  constructor(forBody, level, position = null) {
    this.forBody = forBody;
    this.level = level;
    this.placementsAtPosition = [];
    this.x = position ? position.x : forBody.x;
    this.y = position ? position.y : forBody.y;
    this.scanPlacementsAtPosition();
  }

  scanPlacementsAtPosition() {
    this.placementsAtPosition = this.level.placements.filter((p) => {
      const isSelf = p.id === this.forBody.id;
      return !isSelf && p.x === this.x && p.y === this.y;
    });
  }

  withSolidPlacement() {
    return this.placementsAtPosition.find((p) =>
      p.isSolidForBody(this.forBody)
    );
  }

  withPlacementAddsToInventory() {
    if (this.forBody.canCollectItems) {
      return this.placementsAtPosition.find((p) => {
        return (
          !p.hasBeenCollected && p.addsItemsToInventoryOnCollide(this.forBody)
        );
      });
    }
    return null;
  }

  withCompletesLevel() {
    return this.placementsAtPosition.find((p) => {
      return p.completesLevelOnCollide();
    });
  }

  withNextLevel() {
    return this.placementsAtPosition.find((p) => {
      return p.nextLevelOnCollide();
    });
  }

  withInteract() {
    return this.placementsAtPosition.find((p) => {
      return p.canBeInteracted();
    });
  }

  withMusicTiles() {
    return this.placementsAtPosition.find((p) => {
      return p.canAddMusicEffect();
    });
  }

  withLock() {
    return this.placementsAtPosition.find((p) => {
      return p.canBeUnlocked();
    });
  }

  withEndgame() {
    return this.placementsAtPosition.find((p) => {
      return p.endsGameOnCollide();
    });
  }
}
