export class Info {
  constructor(divId) {
    this.divId = divId;
  }

  show() {
    const main = document.querySelector(this.divId);
  }
}