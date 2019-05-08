import {
  ActivityService
} from './../../app/services/activity.service';
import {
  AppState
} from './../../app/store/reducers/index';
import {
  Component,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  Formatter
} from 'src/helpers/timeFormatter';
import {
  Store
} from '@ngrx/store';
import {
  Observable,
  Subscription,
  BehaviorSubject
} from 'rxjs';
import {
  Activity
} from 'src/app/store/models/activity.model';
import {
  getActivities
} from 'src/app/store/selectors/activities.selectors';
import {
  TimerService
} from 'src/app/services/timer.service';
import {
  RunningActivityService
} from 'src/app/services/running-activity.service';
import {
  LoadActivities
} from 'src/app/store/actions/activities.actions';
import { take, filter } from 'rxjs/operators';

@Component({
  selector: 'st-random-activity',
  templateUrl: './random-activity.view.html',
  styleUrls: ['./random-activity.view.scss']
})
export class RandomActivityView implements OnInit, OnDestroy {

  constructor(
    private store: Store < AppState >,
    private ts: TimerService,
    private ra: RunningActivityService,
    private activityService: ActivityService
  ) {}
  activities$: Observable < Activity[] > ;
  subscribtions: Subscription[] = [];
  pryoritizedActivities: Activity[] = [];

  get currentActivity() {
    return this.ra.getCurrentActivity();
  }

  set currentActivity(activity: Activity) {
    this.ra.setCurrentActivity(activity);
  }


  ngOnInit() {
    this.store.dispatch(new LoadActivities());
    this.activities$ = this.store.select(getActivities);
    const activitiesLoadedSubscription = this.activities$.subscribe(activities => {
      this.pryoritizedActivities = this.activityService.pryoritizeActivities(activities);
    });

    const activitiesLoadedFirstSubscription = this.activities$.pipe(filter((a => a.length > 0)), take(1)).subscribe(activities => {
      this.pryoritizedActivities = this.activityService.pryoritizeActivities(activities);
      this.getRandomActivity();
    });

    this.subscribtions.push(activitiesLoadedSubscription, activitiesLoadedFirstSubscription);
  }

  getRandomActivity() {
    this.currentActivity = this.activityService.getRandomActivity(this.pryoritizedActivities);
    console.log(this.currentActivity);
  }

  getPrevActivity() {
    this.ra.getPrevActivity();
  }

  getNextActivity() {
    if (this.ra.hasNext()) {
      this.ra.getNextActivity();
    } else {
      this.getRandomActivity();
    }
  }

  ngOnDestroy(): void {
    this.subscribtions.map(s => s.unsubscribe());
  }

  format(time: number) {
    return Formatter.formatTimeNumber(time);
  }

}
