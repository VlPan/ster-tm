import { LoadActivitiesStatus, AddActivityStatus, DeleteActivityStatus } from './../models/activity.model';
import {
  LOAD_ACTIVITIES,
  LOAD_ACTIVITIES_SUCCESS,
  LOAD_ACTIVITIES_FAILED,
  ADD_ACTIVITY,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAILED,
  ActivitiesAction,
  DELETE_ACTIVITY,
  DELETE_ACTIVITY_SUCCESS,
  DELETE_ACTIVITY_FAILED
} from './../actions/activities.actions';
import {
  Activity,
  ActivitiesState
} from '../models/activity.model';
import {} from '../actions/activities.actions';

export const initialState: ActivitiesState = {
  activities: [],
  addActivityStatus: AddActivityStatus.INIT,
  loadActivitiesStatus: LoadActivitiesStatus.INIT,
  deleteActivityStatus: DeleteActivityStatus.INIT,
};


export function activtiesReducer(state: ActivitiesState = initialState, action: ActivitiesAction): ActivitiesState {
  console.log(action.type);
  switch (action.type) {
    case LOAD_ACTIVITIES:
      return {
        ...state,
        loadActivitiesStatus: LoadActivitiesStatus.PROGRESS
      };

    case LOAD_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: [...action.payload],
        loadActivitiesStatus: LoadActivitiesStatus.SUCCESS
      };

    case LOAD_ACTIVITIES_FAILED:
      return {
        ...state,
        loadActivitiesStatus: LoadActivitiesStatus.FAILED
      };

    case ADD_ACTIVITY:
      return {
        ...state,
        loadActivitiesStatus: LoadActivitiesStatus.PROGRESS
      };

    case ADD_ACTIVITY_SUCCESS:
      return {
        ...state,
        loadActivitiesStatus: LoadActivitiesStatus.SUCCESS
      };

    case ADD_ACTIVITY_FAILED:
      return {
        ...state,
        loadActivitiesStatus: LoadActivitiesStatus.FAILED
      };

      case DELETE_ACTIVITY:
      return {
        ...state,
        deleteActivityStatus: DeleteActivityStatus.PROGRESS
      };

    case DELETE_ACTIVITY_SUCCESS:
    console.log(state);
      return {
        ...state,
        deleteActivityStatus: DeleteActivityStatus.SUCCESS
      };

    case DELETE_ACTIVITY_FAILED:
      return {
        ...state,
        deleteActivityStatus: DeleteActivityStatus.FAILED
      };


    default:
      return state;
  }
}
