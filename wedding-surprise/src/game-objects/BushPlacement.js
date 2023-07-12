import { Placement } from "./Placement";
import Sprite from "../components/graphics/Sprite";
import { TILES } from "../helpers/tiles";
import soundsManager, { SFX } from "../classes/Sounds";
import { LEVEL_THEMES, Z_INDEX_LAYER_SIZE } from "../helpers/consts";

export class BushPlacement extends Placement {
  constructor(properties, level) {
    super(properties, level);
    this.interacted = false;
    this.hiding = level.theme === LEVEL_THEMES.HIDING;
    if (this.hiding) {
      this.frameSequence = [TILES.BUSH_1, TILES.BUSH_2];
      this.changeOnFrameCount = 30;
      this.showFrame = 0;
      this.tickCounter = 0;
      this.catHiddenHere = false;
    }
  }
  canBeInteracted(_body) {
    return true;
  }

  isCatHiddenHere() {
    return this.catHiddenHere;
  }

  setCatHiddenHere() {
    this.catHiddenHere = !this.catHiddenHere;
  }

  doInteraction() {
    if (this.hiding) {
      this.interacted = true;
      soundsManager.playSfx(SFX.BUSH);
      if (this.isCatHiddenHere()) {
        this.level.catFound();
        soundsManager.playSfx(SFX.MEOW);
      }
    }
  }

  tick() {
    this.tickCounter += 1;

    if (this.tickCounter > this.changeOnFrameCount) {
      this.tickCounter = 0;
      this.showFrame += 1;

      if (this.showFrame === this.frameSequence.length) {
        this.showFrame = 0;
        this.interacted = false;
      }
    }
  }

  activeFrame() {
    return this.frameSequence[this.showFrame];
  }

  zIndex() {
    return this.y * Z_INDEX_LAYER_SIZE + 2;
  }

  renderComponent() {
    return (
      <div
        style={{
          position: "relative",
        }}
      >
        {this.interacted && <Sprite frameCoord={this.activeFrame()} />}
        <div style={{ position: "absolute", left: 0, top: 0 }}>
          <Sprite frameCoord={TILES.BUSH} />
        </div>
      </div>
    );
  }
}
