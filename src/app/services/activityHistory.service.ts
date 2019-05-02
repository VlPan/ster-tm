import { AddActivity, DeleteActivity } from '../store/actions/activities.actions';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Activity } from '../store/models/activity.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityHistory {

constructor(private db: AngularFirestore) {}

  getHisotry() {
    return this.db.collection('/activityHistory').snapshotChanges();
  }

  addActivityHistory(activityHistory: ActivityHistory) {
    return of(this.db.collection('activityHistory').add(activityHistory));
  }

  deleteActivityHistory(id: string) {
    return  of(this.db.collection('activityHistory').doc(id).delete());
  }

  updateActivityHistory(paylaod: {id: string, value: ActivityHistory}) {
    const { id, value } = paylaod;
    return of(this.db.collection('activityHistory').doc(id).set(value));
  }
}
