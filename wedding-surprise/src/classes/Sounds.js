import { Howl } from "howler";
export const SFX = {
  COOK: "COOK",
};

export const MUSIC = {
  DANCEFLOOR: "DANCEFLOOR",
};

const MUSIC_FILES = {
  [MUSIC.DANCEFLOOR]: "/sounds/music/twice.mp3",
};

export class Sounds {
  constructor() {
    this.howls = {};
    this.volume = 0.5;
  }

  init() {
    Object.keys(MUSIC_FILES).forEach((key) => {
      const file = MUSIC_FILES[key];
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
}

const soundManager = new Sounds();

export default soundManager;
