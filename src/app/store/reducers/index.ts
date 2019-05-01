import { ActivitiesState } from './../models/activity.model';
import { createFeatureSelector } from '@ngrx/store';

export const getActivitiesState = createFeatureSelector<ActivitiesState>(
  'activities'
);
