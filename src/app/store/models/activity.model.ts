export interface Activity {
  title: string;
  desc?: boolean;
  categories?: string;
  comments?: number;
  frequency?: string;
  priority?: string;
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


export class ActivitiesState {
  activities: Activity[];
  addActivityStatus: AddActivityStatus;
  loadActivitiesStatus: LoadActivitiesStatus;
  deleteActivityStatus: DeleteActivityStatus;
  updateActivityStatus: UpdateActivityStatus;
}
