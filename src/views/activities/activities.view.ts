import { AddActivity } from './../../app/store/actions/activities.actions';
import { AppState } from './../../app/store/reducers/index';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadActivities, PageDestroyed, DeleteActivity } from 'src/app/store/actions/activities.actions';
import { getActivities } from 'src/app/store/selectors/activities.selectors';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/store/models/activity.model';

@Component({
  selector: 'st-activities',
  templateUrl: './activities.view.html',
  styleUrls: ['./activities.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActivitiesView implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>) { }
  activities$: Observable<Activity[]>;

  ngOnInit() {
    this.store.dispatch(new LoadActivities());

    this.activities$ = this.store.select(getActivities);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new PageDestroyed());
  }

  public deleteActivity(id: string) {
    this.store.dispatch(new DeleteActivity(id));
  }

  public trackByFn(activity: Activity) {

    return activity && activity.id;
 }
}
