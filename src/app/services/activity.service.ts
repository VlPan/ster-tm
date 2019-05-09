import { AddActivity, DeleteActivity } from './../store/actions/activities.actions';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Activity } from '../store/models/activity.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

constructor(private db: AngularFirestore) {}

  getActivities() {
    return this.db.collection('/activities').snapshotChanges();
  }

  addActivity(activity: Activity) {
    return of(this.db.collection('activities').add(activity));
  }

  deleteActivity(id: string) {
    return  of(this.db.collection('activities').doc(id).delete());
  }

  updateActivity(paylaod: {id: string, value: Activity}) {
    const { id, value } = paylaod;
    return of(this.db.collection('activities').doc(id).set(value));
  }

  pryoritizeActivities(activities: Activity[]): Activity[] {
    return activities.reduce((acc, cur) => {
      for (let i = 0; i < cur.frequency; i++) {
        acc.push(cur);
      }
      return acc;
    }, []);
  }

  getRandomActivity(activities) {
    const min = 0;
    const max = activities.length;
    const rand = Math.floor(Math.random() * max) + min;

    return activities[rand];
  }
}
