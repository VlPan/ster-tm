import { Injectable } from '@angular/core';
import { Activity } from '../store/models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class RunningActivityService {

  private currentActivity: Activity;
  private activitiesRunningHistory: Activity[] = [];
  private index = 0;
  constructor() { }

  setCurrentActivity(activity: Activity) {
    if (this.currentActivity) {
      this.activitiesRunningHistory.push(this.currentActivity);
      this.index += 1;
    }

    this.currentActivity = activity;
  }

  getCurrentActivity(): Activity {
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
    }
  }

  hasPrev() {
    return !!this.activitiesRunningHistory[this.index - 1];
  }

  hasNext() {
    return !!this.activitiesRunningHistory[this.index + 1];
  }

  getNextActivity() {
    this.index += 1;
    if (this.hasNext()) {
      this.currentActivity = this.activitiesRunningHistory[this.index];
    }
  }

}
