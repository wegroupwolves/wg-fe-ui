export default class Timer {
  constructor(callback, delay) {
    this.timerId = delay;
    this.start = delay;
    this.remaining = delay;

    this.pause = function () {
      // When class.pause() is called, clear the timeout and save the time remaining
      window.clearTimeout(this.timerId);
      this.remaining -= Date.now() - this.start;
    };

    this.resume = function () {
      // When class.resume() is called, start a new timeout with the remaining time left
      this.start = Date.now();
      window.clearTimeout(this.timerId);
      this.timerId = setTimeout(callback, this.remaining);
    };

    // start the timeout on call
    this.resume();
  }
}