import { STERModel, Activity } from './activity.model';

export interface ActivityHistoryItem {
  activity: Activity;
  savedOptions: SavedOption[];
  time: number;
  scores: number;
}

export interface SavedOption {
  name: string;
  value: number;
}

export class ActivityHistoryState {
  activityHistory: ActivityHistoryItem[];
  addActivityHistoryStatus: AddActivityHistoryStatus;
  loadActivityHistoryStatus: LoadActivityHistoryStatus;
  deleteActivityHistoryStatus: DeleteActivityHistoryStatus;
  updateActivityHistoryStatus: UpdateActivityHistoryStatus;
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

export enum AddActivityHistoryStatus {
  INIT,
  PROGRESS,
  SUCCESS,
  FAILED
}
