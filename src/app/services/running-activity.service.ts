import { Injectable } from '@angular/core';
import { Activity } from '../store/models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class RunningActivityService {

  private currentActivity: Activity;
  private activitiesRunningHistory: Activity[] = [];
  private index = -1;
  constructor() { }

  setCurrentActivity(activity: Activity) {
    this.currentActivity = activity;
    if (this.currentActivity) {
      this.activitiesRunningHistory.push(this.currentActivity);
      this.index += 1;
    }
    console.log(this.index, this.activitiesRunningHistory);
  }

  getCurrentActivity(): Activity {
    console.log('curretn activity', this.currentActivity);
    return this.currentActivity;
  }

  clearHistory() {
    this.activitiesRunningHistory = [];
    this.index = 0;
  }

  getPrevActivity() {
    if (this.index > 0) {
      this.index -= 1;
      this.currentActivity = this.activitiesRunningHistory[this.index];
      console.log(this.index, this.activitiesRunningHistory);
    }
  }

  hasPrev() {
    return !!this.activitiesRunningHistory[this.index - 1];
  }

  hasNext() {
    return !!this.activitiesRunningHistory[this.index + 1];
  }

  getNextActivity() {
    if (this.hasNext()) {
      this.index += 1;
      this.currentActivity = this.activitiesRunningHistory[this.index];
      console.log(this.index, this.activitiesRunningHistory);
    }
  }

}
