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
    console.log(of(this.db.collection('activities').doc(id)));
    return  of(this.db.collection('activities').doc(id).delete());
  }

  updateActivity(paylaod: {id: string, value: Activity}) {
    const { id, value } = paylaod;
    return of(this.db.collection('activities').doc(id).set(value));
  }
}
