import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  percent = 0;
  interval;
  isStarted: boolean;

  constructor() {}

  start() {
    this.isStarted = !this.isStarted;
    this.interval = setInterval(() => {
      this.percent++;
      if (this.percent === 100) {
        clearInterval(this.interval);
      }
    }, 1000);
  }

  stop() {
    this.isStarted = !this.isStarted;
    clearInterval(this.interval);
  }

  add() {
    this.percent += 10;
  }

  remove() {
    this.percent -= 10;
  }
}
