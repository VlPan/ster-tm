import { ActivitiesState, ActivityHistoryState } from './../models/activity.model';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import { activtiesReducer } from './activities.reducer';
import { activtiyHistoryReducer } from './activity-history.reducer';

export interface AppState  {
  activitiesRoot: ActivitiesState;
  activityHistoryRoot: ActivityHistoryState;
}

export const reducers: ActionReducerMap<AppState> = {
  activitiesRoot: activtiesReducer,
  activityHistoryRoot: activtiyHistoryReducer
};

export const getAppState = createFeatureSelector<AppState>(
  'appState'
);
