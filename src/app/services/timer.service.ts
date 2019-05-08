import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TimerService {

  secs = 0;
  mins = 0;
  hours = 0;
  days = 0;
  timerRef;
  running = false;
  startText = 'Start';

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      this.timerRef = setInterval(() => {
        this.secs += 1;
        if (this.secs % 60 === 0) {
          this.mins += 1;
          this.secs = 0;
          if (this.mins % 60 === 0) {
            this.mins = 0;
            this.hours += 1;

            if (this.hours % 24 === 0) {
              this.days += 1;
              this.hours = 0;
            }
          }
        }
      }, 1000);
    } else {
      this.startText = 'Resume';
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    this.running = false;
    this.startText = 'Start';
    this.secs = 0;
    this.mins = 0;
    this.hours = 0;
    clearInterval(this.timerRef);
  }

}
