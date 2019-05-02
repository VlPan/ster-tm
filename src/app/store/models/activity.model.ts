export interface Activity {
  title: string;
  desc?: boolean;
  categories?: string;
  comments?: number;
  frequency?: string;
  priority?: string;
}

export interface STERModel {
  selfLessNess: number;
  timeLessNess: number;
  effortLessNess: number;
  richNess: number;
}

export interface ActivityHistory {
  activity: Activity;
  time: number;
  sterOptions?: STERModel;
  userOptions: {[key: string]: any};
  scores: number;
}

export enum AddActivityStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}

export enum LoadActivitiesStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}


export enum DeleteActivityStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}

export enum UpdateActivityStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}

export enum AddActivityHistoryStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}

export enum LoadActivityHistoryStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}

export enum DeleteActivityHistoryStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}

export enum UpdateActivityHistoryStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}


export class ActivitiesState {
  activities: Activity[];
  addActivityStatus: AddActivityStatus;
  loadActivitiesStatus: LoadActivitiesStatus;
  deleteActivityStatus: DeleteActivityStatus;
  updateActivityStatus: UpdateActivityStatus;
}

export class ActivityHistoryState {
  activityHistory: ActivityHistory[];
  addActivityHistoryStatus: AddActivityHistoryStatus;
  loadActivityHistoryStatus: LoadActivityHistoryStatus;
  deleteActivityHistoryStatus: DeleteActivityHistoryStatus;
  updateActivityHistoryStatus: UpdateActivityHistoryStatus;
}
