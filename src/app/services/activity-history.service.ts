import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn, CollectionReference, AngularFirestoreCollection, QuerySnapshot, Query } from '@angular/fire/firestore';
import { ActivityHistoryItem } from '../store/models/activity-history.model';
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

  async deleteActivityHistoryByActivityId(id: string) {
    try {
      const collection = await this.db.collection('activityHistory', (ref: CollectionReference) => {
        return ref.where('activity.id', '==', id);
      });

      const collectionSize = await this.getCollectionSize(collection);
      console.log(collectionSize);

      return this.deleteCollection(collection, collectionSize);
    } catch (err) {
      console.log('err', err);
      throw err;
    }

  }

  updateActivityHistory(paylaod: {id: string, value: ActivityHistoryItem}) {
    const { id, value } = paylaod;
    return of(this.db.collection('activityHistory').doc(id).set(value));
  }

  getCollectionSize(collection: AngularFirestoreCollection<{}>) {
    return collection.get().toPromise().then(c => c.size);
  }


  async deleteCollection(collection, batchSize) {
    const collectionRef = this.db.collection(collection);
    let query: Query;
    await collectionRef.get().toPromise().then((q) => {
      query = q.query.limit(batchSize);
    });

    return query.firestore && new Promise((resolve, reject) => {
      this.deleteQueryBatch(query.firestore, query, batchSize, resolve, reject);
    });
  }

  async deleteQueryBatch(db, query: Query, batchSize, resolve, reject) {
    return query.get()
      .then((snapshot) => {
        // When there are no documents left, we are done
        if (snapshot.size === 0) {
          return 0;
        }
        // Delete documents in a batch
        const batch = db.batch();
        snapshot.docs.forEach((doc) => {
          batch.delete(doc.ref);
        });
        return batch.commit().then(() => {
          resolve(true);
        });
      });
  }
}
