import { ActivityHistoryState } from '../models/activity-history.model';
import { getActivitiesState, getActivityHistoryState } from './../reducers/index';

import { ActivitiesState } from '../models/activity.model';
import { createSelector } from '@ngrx/store';


export const getActivityHistory = createSelector(
  getActivityHistoryState,
  (state: ActivityHistoryState) => state.activityHistory
);

export const getActivityHisotryLoadStatus = createSelector(
  getActivityHistoryState,
  (state: ActivityHistoryState) => state.loadActivityHistoryStatus
);

export const getActivityHistoryAddStatus = createSelector(
  getActivityHistoryState,
  (state: ActivityHistoryState) => state.addActivityHistoryStatus
);
