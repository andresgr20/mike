export class PlacementTypeAnimationFrame {
  constructor(frameSequence = ["0x1"], changeOnFrameCount = 30) {
    this.frameSequence = frameSequence;
    this.changeOnFrameCount = changeOnFrameCount;
    this.showFrame = 0;
    this.tickCounter = 0;
  }

  get activeFrame() {
    return this.frameSequence[this.showFrame];
  }

  tick() {
    this.tickCounter += 1;

    if (this.tickCounter > this.changeOnFrameCount) {
      this.tickCounter = 0;
      this.showFrame += 1;

      if (this.showFrame === this.frameSequence.length) {
        this.showFrame = 0;
      }
    }
  }
}
