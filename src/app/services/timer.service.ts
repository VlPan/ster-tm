import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
  perc: BehaviorSubject<number> = new BehaviorSubject(612);
  mmin = 2;
  percm = this.perc.value;
  startText = 'Start';

  startTimer() {
    this.running = !this.running;
    if (this.running) {
      this.startText = 'Stop';
      this.timerRef = setInterval(() => {
        this.secs += 1;
        this.perc.next(this.perc.value - (this.percm / 60 / this.mmin));
        if (this.secs % 60 === 0) {
          this.mins += 1;
          if ((this.mins >= this.mmin)) {
            this.perc.next(612);
          }
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
    this.resetTimer();
    this.running = false;
    clearInterval(this.timerRef);
  }

  pauseTimer() {
    this.running = false;
    clearInterval(this.timerRef);
  }

  resetTimer() {
    this.secs = 0;
    this.mins = 0;
    this.hours = 0;
    this.perc.next(612);
  }

}
