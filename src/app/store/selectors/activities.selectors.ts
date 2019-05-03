import { AppState, getActivitiesState } from './../reducers/index';

import { Activity, ActivitiesState } from './../models/activity.model';
import { createSelector } from '@ngrx/store';


export const getActivities = createSelector(
  getActivitiesState,
  (state: ActivitiesState) => state.activities
);

export const getActivitiesLoadStatus = createSelector(
  getActivitiesState,
  (state: ActivitiesState) => state.loadActivitiesStatus
);

export const getActivitiesAddStatus = createSelector(
  getActivitiesState,
  (state: ActivitiesState) => state.addActivityStatus
);
