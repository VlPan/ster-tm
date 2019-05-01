import { LoadActivitiesSuccess,
   LoadActivitiesFailed, AddActivity,
   ADD_ACTIVITY, AddActivitySuccess, AddActivityFailed, PAGE_DESTROYED } from './../actions/activities.actions';
import { ActivityService } from './../../services/activity.service';
import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap, catchError, filter, takeUntil } from 'rxjs/operators';
import { LOAD_ACTIVITIES } from '../actions/activities.actions';
import { of } from 'rxjs';
import { DocumentChangeAction } from '@angular/fire/firestore';
import { Activity } from '../models/activity.model';

@Injectable()
export class ActivitiesEffects {
  constructor(
    private actions$: Actions,
    private activityService: ActivityService
  ) {}

  @Effect()
  loadActivities$ = this.actions$.pipe(ofType(LOAD_ACTIVITIES)).pipe(
    switchMap(() => {
      return this.activityService
        .getActivities()
        .pipe(
          takeUntil(
            this.actions$.pipe(ofType(PAGE_DESTROYED))
          ),
          map((activities: DocumentChangeAction<{}>[]) => {
            const mapped = activities.map(a => ({id: a.payload.doc.id, ...a.payload.doc.data()}));
            return new LoadActivitiesSuccess(mapped as any);
          },
          catchError(error => of(new LoadActivitiesFailed(error)))
        ));
    })
  );

  @Effect()
  addActivity$ = this.actions$.pipe(ofType(ADD_ACTIVITY)).pipe(
    map((action: AddActivity) => action.payload),
    filter((activty) => !!activty),
    switchMap(activty => {
      return this.activityService
        .addActivity(activty)
        .pipe(
          map(addedActivty => new AddActivitySuccess()),
          catchError(error => of(new AddActivityFailed(error)))
        );
    })
  );

//   @Effect()
//   createPizzaSuccess$ = this.actions$
//     .ofType(pizzaActions.CREATE_PIZZA_SUCCESS)
//     .pipe(
//       map((action: pizzaActions.CreatePizzaSuccess) => action.payload),
//       map(pizza => {
//         return new fromRoot.Go({
//           path: ['/products', pizza.id],
//         });
//       })
//     );

//   @Effect()
//   updatePizza$ = this.actions$.ofType(pizzaActions.UPDATE_PIZZA).pipe(
//     map((action: pizzaActions.UpdatePizza) => action.payload),
//     switchMap(pizza => {
//       return this.pizzaService
//         .updatePizza(pizza)
//         .pipe(
//           map(pizza => new pizzaActions.UpdatePizzaSuccess(pizza)),
//           catchError(error => of(new pizzaActions.UpdatePizzaFail(error)))
//         );
//     })
//   );

//   @Effect()
//   removePizza$ = this.actions$.ofType(pizzaActions.REMOVE_PIZZA).pipe(
//     map((action: pizzaActions.RemovePizza) => action.payload),
//     switchMap(pizza => {
//       return this.pizzaService
//         .removePizza(pizza)
//         .pipe(
//           map(() => new pizzaActions.RemovePizzaSuccess(pizza)),
//           catchError(error => of(new pizzaActions.RemovePizzaFail(error)))
//         );
//     })
//   );

//   @Effect()
//   handlePizzaSuccess$ = this.actions$
//     .ofType(
//       pizzaActions.UPDATE_PIZZA_SUCCESS,
//       pizzaActions.REMOVE_PIZZA_SUCCESS
//     )
//     .pipe(
//       map(pizza => {
//         return new fromRoot.Go({
//           path: ['/products'],
//         });
//       })
//     );
// }
}
