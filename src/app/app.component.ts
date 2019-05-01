import { LoadActivities, AddActivity, PageDestroyed } from './store/actions/activities.actions';
import { ActivitiesState, Activity } from './store/models/activity.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { getActivities } from './store/selectors/activities.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  activities$: Observable<Activity[]>;
  constructor(private store: Store<ActivitiesState>) {}
  title = 'ster';

  ngOnInit() {
    this.store.dispatch(new LoadActivities());
    // this.store.dispatch(new AddActivity({title: 'hello world'}));
    this.activities$ = this.store.select(getActivities);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new PageDestroyed());
  }
}
