import {
  DELETE_ACTIVITY_HISTORY,
  DELETE_ACTIVITY_HISTORY_SUCCESS,
  DELETE_ACTIVITY_HISTORY_FAILED,
  UPDATE_ACTIVITY_HISTORY,
  UPDATE_ACTIVITY_HISTORY_SUCCESS,
  UPDATE_ACTIVITY_HISTORY_FAILED,
  ActivityHistoryAction
} from './../actions/activity-history.actions';
import {
  ActivityHistoryState,
  AddActivityHistoryStatus,
  DeleteActivityHistoryStatus,
  UpdateActivityHistoryStatus,
  LoadActivityHistoryStatus
} from '../models/activity-history.model';
import {

} from './../actions/activities.actions';
import {} from '../actions/activities.actions';
import {
  LOAD_ACTIVITY_HISTORY,
  LOAD_ACTIVITY_HISTORY_SUCCESS,
  LOAD_ACTIVITY_HISTORY_FAILED,
  ADD_ACTIVITY_HISTORY,
  ADD_ACTIVITY_HISTORY_SUCESS,
  ADD_ACTIVITY_HISTORY_FAILED
} from '../actions/activity-history.actions';

export const initialState: ActivityHistoryState = {
  activityHistory: [],
  addActivityHistoryStatus: AddActivityHistoryStatus.INIT,
  loadActivityHistoryStatus: LoadActivityHistoryStatus.INIT,
  deleteActivityHistoryStatus: DeleteActivityHistoryStatus.INIT,
  updateActivityHistoryStatus: UpdateActivityHistoryStatus.INIT,
};


export function activityHistoryReducer(state: ActivityHistoryState = initialState, action: ActivityHistoryAction): ActivityHistoryState {
  switch (action.type) {
    case LOAD_ACTIVITY_HISTORY:
      return {
        ...state,
        loadActivityHistoryStatus: LoadActivityHistoryStatus.PROGRESS
      };

    case LOAD_ACTIVITY_HISTORY_SUCCESS:
      return {
        ...state,
        activityHistory: [...action.payload].reverse(),
        loadActivityHistoryStatus: LoadActivityHistoryStatus.SUCCESS
      };

    case LOAD_ACTIVITY_HISTORY_FAILED:
      return {
        ...state,
        loadActivityHistoryStatus: LoadActivityHistoryStatus.FAILED
      };

    case ADD_ACTIVITY_HISTORY:
      return {
        ...state,
        addActivityHistoryStatus: AddActivityHistoryStatus.PROGRESS
      };

    case ADD_ACTIVITY_HISTORY_SUCESS:
      return {
        ...state,
        addActivityHistoryStatus: AddActivityHistoryStatus.SUCCESS
      };

    case ADD_ACTIVITY_HISTORY_FAILED:
      return {
        ...state,
        addActivityHistoryStatus: AddActivityHistoryStatus.FAILED
      };

    case DELETE_ACTIVITY_HISTORY:
      return {
        ...state,
        deleteActivityHistoryStatus: DeleteActivityHistoryStatus.PROGRESS
      };

    case DELETE_ACTIVITY_HISTORY_SUCCESS:
      return {
        ...state,
        deleteActivityHistoryStatus: DeleteActivityHistoryStatus.SUCCESS
      };

    case DELETE_ACTIVITY_HISTORY_FAILED:
      return {
        ...state,
        deleteActivityHistoryStatus: DeleteActivityHistoryStatus.FAILED
      };

    case UPDATE_ACTIVITY_HISTORY:
      return {
        ...state,
        updateActivityHistoryStatus: UpdateActivityHistoryStatus.PROGRESS
      };

    case UPDATE_ACTIVITY_HISTORY_SUCCESS:
      return {
        ...state,
        updateActivityHistoryStatus: UpdateActivityHistoryStatus.SUCCESS
      };

    case UPDATE_ACTIVITY_HISTORY_FAILED:
      return {
        ...state,
        updateActivityHistoryStatus: UpdateActivityHistoryStatus.FAILED
      };


    default:
      return state;
  }
}
