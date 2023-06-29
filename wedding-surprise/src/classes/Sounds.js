import { Howl } from "howler";
export const SFX = {
  BUSH: "BUSH",
  MEOW: "MEOW",
};

export const MUSIC = {
  DANCEFLOOR: "DANCEFLOOR",
};

const FILES = {
  [MUSIC.DANCEFLOOR]: "/sounds/music/twice.mp3",
  [SFX.MEOW]: "/sounds/sfx/meow.mp3",
  [SFX.BUSH]: "/sounds/sfx/bush.mp3",
};

export class Sounds {
  constructor() {
    this.howls = {};
    this.volume = 0.5;
  }

  init() {
    Object.keys(FILES).forEach((key) => {
      const file = FILES[key];
      this.howls[key] = new Howl({
        src: [file],
      });
    });
  }

  playMusic(key) {
    const sound = this.howls[key];

    // play it with current volume
    // sound.volume(this.volume);
    // sound.play();
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

const soundManager = new Sounds();

export default soundManager;
