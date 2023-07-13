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

const FILES_MUSIC = {
  [MUSIC.DANCEFLOOR]: "/sounds/music/twice.mp3",
  [MUSIC.ENDING]: "/sounds/music/memory.mp3",
  [MUSIC.ZELDA]: "/sounds/music/gerudo-valley.mp3",
};

const FILES_SFX = {
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
    Object.keys(FILES_MUSIC).forEach((key) => {
      const file = FILES_MUSIC[key];
      this.howls[key] = new Howl({
        src: [file],
        loop: true,
      });
    });
    Object.keys(FILES_SFX).forEach((key) => {
      const file = FILES_SFX[key];
      this.howls[key] = new Howl({
        src: [file],
      });
    });
  }

  stop() {
    if (this.currentSound) {
      this.currentSound.pause();
      this.currentSound = null;
    }
  }

  playMusic(key) {
    if (this.currentSound) {
      this.currentSound.pause();
    }
    this.currentSound = this.howls[key];
    this.currentSound.volume(this.volume);
    this.currentSound.play();
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
