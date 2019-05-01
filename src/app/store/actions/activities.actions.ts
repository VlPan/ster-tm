import { Activity } from '../models/activity.model';
import {Action} from '@ngrx/store';

export const LOAD_ACTIVITIES = '[STER] LOAD ACTIVITIES';
export const LOAD_ACTIVITIES_SUCCESS = '[STER] LOAD ACTIVITIES SUCCESS';
export const LOAD_ACTIVITIES_FAILED = '[STER] LOAD ACTIVITIES FAILED';

export class LoadActivities implements Action {
  readonly type = LOAD_ACTIVITIES;
}

export class LoadActivitiesFailed implements Action {
  readonly type = LOAD_ACTIVITIES_FAILED;
  constructor(public payload: any) {}
}

export class LoadActivitiesSuccess implements Action {
  readonly type = LOAD_ACTIVITIES_SUCCESS;
  constructor(public payload: Activity[]) {}
}


export const ADD_ACTIVITY = '[STER] ADD ACTIVITIES';
export const ADD_ACTIVITY_SUCCESS = '[STER] ADD ACTIVITIES SUCCESS';
export const ADD_ACTIVITY_FAILED = '[STER] ADD ACTIVITIES FAILED';



export class AddActivity implements Action {
  readonly type = ADD_ACTIVITY;
  constructor(public payload: Activity) {}
}

export class AddActivityFailed implements Action {
  readonly type = ADD_ACTIVITY_FAILED;
  constructor(public payload: any) {}
}

export class AddActivitySuccess implements Action {
  readonly type = ADD_ACTIVITY_SUCCESS;
  constructor(public payload?: Activity[]) {}
}

export const PAGE_DESTROYED = '[STER] PAGE_DESTROYED';
export class PageDestroyed implements Action {
  readonly type = PAGE_DESTROYED;
}



export type ActivitiesAction =
    | LoadActivities
    | LoadActivitiesFailed
    | LoadActivitiesSuccess
    | AddActivity
    | AddActivityFailed
    | AddActivitySuccess;
