export default class Timer {
  constructor(callback, delay) {
    this.callback = callback;
    this.timerId = delay;
    this.start = delay;
    this.remaining = delay;
    // start the timeout on call
    this.resume();
  }

  resume() {
    // When class.resume() is called, start a new timeout with the remaining time left
    this.start = Date.now();
    window.clearTimeout(this.timerId);
    this.timerId = setTimeout(this.callback, this.remaining);
  };

  pause() {
    // When class.pause() is called, clear the timeout and save the time remaining
    window.clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  };
}