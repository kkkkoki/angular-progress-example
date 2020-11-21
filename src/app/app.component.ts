import { Component } from "@angular/core";

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
      if (this.percent >= 100) {
        clearInterval(this.interval);
        this.percent = 100;
      }
    }, 2000);
  }

  stop() {
    this.isStarted = !this.isStarted;
    clearInterval(this.interval);
  }

  add() {
    if (this.percent <= 90) {
      this.percent += 10;
    } else if (this.percent >= 90) {
      this.percent = 100;
    }
  }

  remove() {
    if (this.percent >= 10) {
      this.percent -= 10;
    } else if (this.percent <= 10) {
      this.percent = 0;
    }
    this.stop();
  }
}
