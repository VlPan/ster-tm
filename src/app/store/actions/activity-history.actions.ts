import { ActivityHistoryItem } from '../models/activity-history.model';
import { Activity } from '../models/activity.model';
import {Action} from '@ngrx/store';

export const LOAD_ACTIVITY_HISTORY = '[STER] LOAD ACTIVITY HISTORY';
export const LOAD_ACTIVITY_HISTORY_SUCCESS = '[STER] LOAD ACTIVITY HISTORY SUCCESS';
export const LOAD_ACTIVITY_HISTORY_FAILED = '[STER] LOAD ACTIVITY HISTORY FAILED';

export class LoadActivityHistory implements Action {
  readonly type = LOAD_ACTIVITY_HISTORY;
}

export class LoadActivityHistoryFailed implements Action {
  readonly type = LOAD_ACTIVITY_HISTORY_FAILED;
  constructor(public payload: any) {}
}

export class LoadActivityHistorySuccess implements Action {
  readonly type = LOAD_ACTIVITY_HISTORY_SUCCESS;
  constructor(public payload: ActivityHistoryItem[]) {}
}


export const ADD_ACTIVITY_HISTORY = '[STER] ADD ACTIVITY HISTORY';
export const ADD_ACTIVITY_HISTORY_SUCESS = '[STER] ADD ACTIVITY HISTORY SUCCESS';
export const ADD_ACTIVITY_HISTORY_FAILED = '[STER] ADD ACTIVITY HISTORY FAILED';



export class AddActivityHistory implements Action {
  readonly type = ADD_ACTIVITY_HISTORY;
  constructor(public payload: ActivityHistoryItem) {}
}

export class AddActivityHistoryFailed implements Action {
  readonly type = ADD_ACTIVITY_HISTORY_FAILED;
  constructor(public payload: any) {}
}

export class AddActivityHistorySuccess implements Action {
  readonly type = ADD_ACTIVITY_HISTORY_SUCESS;
  constructor(public payload?: Activity[]) {}
}


export const DELETE_ACTIVITY_HISTORY = '[STER] DELETE ACTIVITY HISTORY';
export const DELETE_ACTIVITY_HISTORY_SUCCESS = '[STER] DELETE ACTIVITY HISTORY SUCCESS';
export const DELETE_ACTIVITY_HISTORY_FAILED = '[STER] DELETE ACTIVITY HISTORY FAILED';

export class DeleteActivityHistory implements Action {
  readonly type = DELETE_ACTIVITY_HISTORY;
  constructor(public payload: string) {}
}

export class DeleteActivityHistorySuccess implements Action {
  readonly type = DELETE_ACTIVITY_HISTORY_SUCCESS;
  constructor(public payload?: any) {}
}

export class DeleteActivityHistoryFailed implements Action {
  readonly type = DELETE_ACTIVITY_HISTORY_FAILED;
  constructor(public payload?: Activity[]) {}
}


export const UPDATE_ACTIVITY_HISTORY = '[STER] UPDATE ACTIVITY HISTORY';
export const UPDATE_ACTIVITY_HISTORY_SUCCESS = '[STER] UPDATE ACTIVITY HISTORY SUCCESS';
export const UPDATE_ACTIVITY_HISTORY_FAILED = '[STER] UPDATE ACTIVITY HISTORY FAILED';

export class UpdateActivityHistory implements Action {
  readonly type = UPDATE_ACTIVITY_HISTORY;
  constructor(public payload: {id: string, value: ActivityHistoryItem}) {}
}

export class  UpdateActivityHistorySuccess implements Action {
  readonly type = UPDATE_ACTIVITY_HISTORY_SUCCESS;
  constructor(public payload?: any) {}
}

export class UpdateActivityHistoryFailed implements Action {
  readonly type = UPDATE_ACTIVITY_HISTORY_FAILED;
  constructor(public payload?: any) {}
}



export type ActivityHistoryAction =
    | LoadActivityHistory
    | LoadActivityHistoryFailed
    | LoadActivityHistorySuccess
    | AddActivityHistory
    | AddActivityHistoryFailed
    | AddActivityHistorySuccess
    | DeleteActivityHistory
    | DeleteActivityHistorySuccess
    | DeleteActivityHistoryFailed
    | UpdateActivityHistory
    | UpdateActivityHistorySuccess
    | UpdateActivityHistoryFailed;
