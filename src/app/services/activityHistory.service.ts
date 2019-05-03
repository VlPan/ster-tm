import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivityHistoryItem } from '../store/models/activity.model';
import {of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityHistory {

constructor(private db: AngularFirestore) {}

  getHistory() {
    return this.db.collection('/activityHistory').snapshotChanges();
  }

  addActivityHistory(activityHistory: ActivityHistoryItem) {
    return of(this.db.collection('activityHistory').add(activityHistory));
  }

  deleteActivityHistory(id: string) {
    return  of(this.db.collection('activityHistory').doc(id).delete());
  }

  updateActivityHistory(paylaod: {id: string, value: ActivityHistoryItem}) {
    const { id, value } = paylaod;
    return of(this.db.collection('activityHistory').doc(id).set(value));
  }
}
