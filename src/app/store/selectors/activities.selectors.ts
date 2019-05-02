import { AppState } from './../reducers/index';

import { Activity, ActivitiesState } from './../models/activity.model';
import { createSelector } from '@ngrx/store';
import { getAppState } from '../reducers';

export const getActivitiesRootState = createSelector(
  getAppState,
  (state: AppState) => state.activitiesRoot
);

export const getActivities = createSelector(
  getActivitiesRootState,
  (state: ActivitiesState) => state.activities
);

export const getActivitiesLoadStatus = createSelector(
  getActivitiesRootState,
  (state: ActivitiesState) => state.loadActivitiesStatus
);

export const getActivitiesAddStatus = createSelector(
  getActivitiesRootState,
  (state: ActivitiesState) => state.addActivityStatus
);
