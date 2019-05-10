import { AddActivityDialogComponent } from './../../components/add-activity-dialog/add-activity-dialog.component';
import { AddActivity, UpdateActivity } from './../../app/store/actions/activities.actions';
import { AppState } from './../../app/store/reducers/index';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadActivities, PageDestroyed, DeleteActivity } from 'src/app/store/actions/activities.actions';
import { getActivities } from 'src/app/store/selectors/activities.selectors';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/store/models/activity.model';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'st-activities',
  templateUrl: './activities.view.html',
  styleUrls: ['./activities.view.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ActivitiesView implements OnInit, OnDestroy {

  constructor(private store: Store<AppState>, private dialog: MatDialog) { }
  activities$: Observable<Activity[]>;

  ngOnInit() {
    this.activities$ = this.store.select(getActivities);
  }

  ngOnDestroy(): void {
    this.store.dispatch(new PageDestroyed());
  }

  public deleteActivity(id: string) {
    this.store.dispatch(new DeleteActivity(id));
  }

  public updateActivity(arg: {id: string, value: Activity}) {
    console.log('ARG', arg);
    const {id, value} = arg;
    this.store.dispatch(new UpdateActivity({id, value}));
  }


  public trackByFn(activity: Activity) {
    return activity && activity.id;
  }

  public openAddActivityDialog() {
    const dialogRef = this.dialog.open(AddActivityDialogComponent);

    const subsriber = dialogRef.afterClosed().subscribe(activity => {
      if (activity) {
        this.store.dispatch(new AddActivity(activity));
        subsriber.unsubscribe();
      }
    });
  }

}
