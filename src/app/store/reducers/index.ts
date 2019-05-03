import { ActivitiesState, ActivityHistoryState } from './../models/activity.model';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { activitiesReducer } from './activities.reducer';
import { activityHistoryReducer } from './activity-history.reducer';

export interface AppState  {
  activitiesRoot: ActivitiesState;
  activityHistoryRoot?: ActivityHistoryState;
}

export const reducers: ActionReducerMap<AppState> = {
  activitiesRoot: activitiesReducer,
  activityHistoryRoot: activityHistoryReducer
};


export const getActivitiesState = createFeatureSelector<ActivitiesState>(
  'activitiesRoot'
);

export const getActivityHistoryState = createFeatureSelector<ActivityHistoryState>(
  'activityHistoryRoot'
);