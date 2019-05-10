import {
  LOAD_ACTIVITY_HISTORY,
  LoadActivityHistorySuccess,
  LoadActivityHistoryFailed,
  ADD_ACTIVITY_HISTORY,
  AddActivityHistory,
  AddActivityHistorySuccess,
  AddActivityHistoryFailed,
  DELETE_ACTIVITY_HISTORY,
  DeleteActivityHistory,
  DeleteActivityHistorySuccess,
  DeleteActivityHistoryFailed,
  UPDATE_ACTIVITY_HISTORY,
  UpdateActivityHistory,
  UpdateActivityHistorySuccess,
  UpdateActivityHistoryFailed
} from './../actions/activity-history.actions';

import {
  Injectable
} from '@angular/core';

import {
  Effect,
  Actions,
  ofType
} from '@ngrx/effects';
import {
  map,
  switchMap,
  catchError,
  filter,
  takeUntil,
  tap
} from 'rxjs/operators';
import {
  LOAD_ACTIVITIES,
  PAGE_DESTROYED
} from '../actions/activities.actions';
import {
  of, defer
} from 'rxjs';
import {
  DocumentChangeAction
} from '@angular/fire/firestore';
import {
  ActivityHistory
} from 'src/app/services/activity-history.service';

@Injectable()
export class ActivityHistoryEffects {
  constructor(
    private actions$: Actions,
    private activityHistory: ActivityHistory
  ) {}

  @Effect()
  loadActivityHistory$ = this.actions$.pipe(ofType(LOAD_ACTIVITY_HISTORY)).pipe(
    switchMap(() => {
      return this.activityHistory
        .getHistory()
        .pipe(
          map((activities: DocumentChangeAction < {} > []) => {
              const mapped = activities.map(a => ({
                id: a.payload.doc.id,
                ...a.payload.doc.data()
              }));
              return new LoadActivityHistorySuccess(mapped as any);
            },
            catchError(error => of (new LoadActivityHistoryFailed(error)))
          ));
    })
  );

  @Effect()
  addActivity$ = this.actions$.pipe(ofType(ADD_ACTIVITY_HISTORY)).pipe(
    map((action: AddActivityHistory) => action.payload),
    filter((activityHistory) => !!activityHistory),
    switchMap(activityH => {
      return this.activityHistory
        .addActivityHistory(activityH)
        .pipe(
          takeUntil(
            this.actions$.pipe(ofType(PAGE_DESTROYED))
          ),
          map(addedActivty => new AddActivityHistorySuccess()),
          catchError(error => of (new AddActivityHistoryFailed(error)))
        );
    })
  );


  @Effect()
  deleteActivityHistory$ = this.actions$.pipe(
    ofType(DELETE_ACTIVITY_HISTORY),
    map((action: DeleteActivityHistory) => action.payload),
    switchMap(activityId => {
      return defer(async () => {
        await this.activityHistory.deleteActivityHistoryByActivityId(activityId);
      })
        .pipe(
          takeUntil(
            this.actions$.pipe(ofType(PAGE_DESTROYED))
          ),
          map((res) => new DeleteActivityHistorySuccess()),
          catchError(error => of (new DeleteActivityHistoryFailed(error)))
        );
    })
  );

  @Effect()
  updateActivityHistory$ = this.actions$.pipe(ofType(UPDATE_ACTIVITY_HISTORY)).pipe(
    map((action: UpdateActivityHistory) => action.payload),
    switchMap(payload => {
      return this.activityHistory.updateActivityHistory(payload)
        .pipe(
          takeUntil(
            this.actions$.pipe(ofType(PAGE_DESTROYED))
          ),
          map(() => new UpdateActivityHistorySuccess()),
          catchError(error => of (new UpdateActivityHistoryFailed(error)))
        );
    })
  );
}
