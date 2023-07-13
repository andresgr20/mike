import { Howl } from "howler";
export const SFX = {
  BUSH: "BUSH",
  MEOW: "MEOW",
};

export const MUSIC = {
  DANCEFLOOR: "DANCEFLOOR",
  ENDING: "ENDING",
  ZELDA: "ZELDA",
};

const FILES = {
  [MUSIC.DANCEFLOOR]: "/sounds/music/twice.mp3",
  [MUSIC.ENDING]: "/sounds/music/memory.mp3",
  [MUSIC.ZELDA]: "/sounds/music/gerudo-valley.mp3",
  [SFX.MEOW]: "/sounds/sfx/meow.mp3",
  [SFX.BUSH]: "/sounds/sfx/bush.mp3",
};

export class Sounds {
  constructor() {
    this.howls = {};
    this.volume = 0.5;
    this.currentSound = null;
  }

  init() {
    Object.keys(FILES).forEach((key) => {
      const file = FILES[key];
      this.howls[key] = new Howl({
        src: [file],
        loop: true,
      });
    });
  }

  stop() {
    if (this.currentSound) {
      const sound = this.howls[this.currentSound];
      sound.pause();
    }
  }

  playMusic(key) {
    const sound = this.howls[key];
    this.currentSound = key;
    sound.volume(this.volume);
    sound.play();
  }

  playSfx(key) {
    const sound = this.howls[key];
    sound.volume(this.volume);
    sound.play();
  }

  increaseVolume() {
    this.volume += 0.1;
  }

  decreaeVolume() {
    this.volume -= 0.1;
  }

  resetVolume() {
    this.volume = 0.5;
  }

  setVolume(volume) {
    this.volume = volume;
  }
}

const soundsManager = new Sounds();

export default soundsManager;
