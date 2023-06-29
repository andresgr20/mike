export class GameLoop {
  constructor(onStep) {
    this.onStep = onStep;
    this.rafCallback = null;
    this.hasStopped = false;
    this.start();
  }

  start() {
    let previousMs;
    const step = 1 / 60;
    const tick = (timestampMs) => {
      if (this.hasStopped) {
        return;
      }
      if (previousMs === undefined) {
        previousMs = timestampMs;
      }
      let delta = (timestampMs - previousMs) / 1000;
      while (delta >= step) {
        this.onStep();
        delta -= step;
      }
      previousMs = timestampMs - delta * 1000;
      this.rafCallback = requestAnimationFrame(tick);
    };

    this.rafCallback = requestAnimationFrame(tick);
  }

  stop() {
    this.hasStopped = true;
    cancelAnimationFrame(this.rafCallback);
  }
}
