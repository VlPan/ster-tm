import { AddActivity } from './../store/actions/activities.actions';
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
    console.log('add activity');
    return of(this.db.collection('activities').add(activity));
  }
}
