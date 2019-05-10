import { AddActivityHistory } from './../../app/store/actions/activity-history.actions';
import { ActivityHistoryItem } from './../../app/store/models/activity-history.model';
import { MatDialog } from '@angular/material';
import {
  ActivityService
} from './../../app/services/activity.service';
import {
  AppState
} from './../../app/store/reducers/index';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef
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
import { ActivtyDoneDialogComponent } from 'src/components/activty-done-dialog/activty-done-dialog.component';


@Component({
  selector: 'st-random-activity',
  templateUrl: './random-activity.view.html',
  styleUrls: ['./random-activity.view.scss']
})
export class RandomActivityView implements OnInit, OnDestroy {

  constructor(
    private store: Store < AppState >,
    public ts: TimerService,
    private ra: RunningActivityService,
    private activityService: ActivityService,
    private dialog: MatDialog
  ) {}
  activities$: Observable < Activity[] > ;
  subscribtions: Subscription[] = [];
  pryoritizedActivities: Activity[] = [];
  activityStartedTimerFirst = true;

  @ViewChild('circle') circleEl: ElementRef;

  get currentActivity() {
    return this.ra.getCurrentActivity();
  }

  set currentActivity(activity: Activity) {
    this.ra.setCurrentActivity(activity);
  }


  ngOnInit() {

    this.activities$ = this.store.select(getActivities);
    const activitiesLoadedSubscription = this.activities$.subscribe(activities => {
      this.pryoritizedActivities = this.activityService.pryoritizeActivities(activities);
    });

    const activitiesLoadedFirstSubscription = this.activities$.pipe(filter((a => a.length > 0)), take(1)).subscribe(activities => {
      this.pryoritizedActivities = this.activityService.pryoritizeActivities(activities);
      if (!this.currentActivity) {
        this.getRandomActivity();
      }
    });

    this.subscribtions.push(activitiesLoadedSubscription, activitiesLoadedFirstSubscription);
  }

  getRandomActivity() {
    this.currentActivity = this.activityService.getRandomActivity(this.pryoritizedActivities);
    this.clearTimer();
  }

  getPrevActivity() {
    this.clearTimer();
    this.ra.getPrevActivity();
  }

  hasNext() {
    return this.ra.hasNext();
  }

  hasPrev() {
    return this.ra.hasPrev();
  }
  getNextActivity() {
    if (this.ra.hasNext()) {
      this.clearTimer();
      this.activityStartedTimerFirst = true;
      this.ra.getNextActivity();
    } else {
      this.clearTimer();
      this.activityStartedTimerFirst = true;
      this.getRandomActivity();
    }
  }

  toggleTimer() {
    if (!this.ts.running) {
      if (this.activityStartedTimerFirst) {
        this.ts.setStartTime();
        this.activityStartedTimerFirst = false;
      }
      this.startTimer();
    } else {
      this.pauseTimer();
    }
  }

  pauseTimer() {
    this.ts.pauseTimer();
  }

  startTimer() {
    this.ts.perc.subscribe((value) => {
      this.circleEl.nativeElement.style.strokeDashoffset = value;
    });
    this.ts.startTimer();
  }

  resetTimer() {
    this.ts.resetTimer();
  }

  clearTimer() {
    this.ts.clearTimer();
  }

  ngOnDestroy(): void {
    this.subscribtions.map(s => s.unsubscribe());
  }

  format(time: number) {
    return Formatter.formatTimeNumber(time);
  }

  activityDone() {
    this.openActivityDoneDialog();
  }

  public openActivityDoneDialog() {
    const dialogRef = this.dialog.open(ActivtyDoneDialogComponent, {
      data: {
        activity: this.currentActivity,
        time: this.ts.secs + this.ts.mins * 60 + this.ts.hours * 60 * 60 + this.ts.days * 60 * 60 * 24
      }
    });

    const subsriber = dialogRef.afterClosed().subscribe((history: ActivityHistoryItem) => {
      if (history) {
        this.store.dispatch(new AddActivityHistory(history));
        this.clearTimer();
        this.getNextActivity();
        subsriber.unsubscribe();
      }
    });
  }

}
