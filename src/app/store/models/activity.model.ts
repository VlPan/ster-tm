export interface Activity {
  id?: string;
  title: string;
  desc?: string;
  tags?: string[];
  comments?: string;
  frequency?: number;
  priority?: number;
  color?: string;
  playlists?: Playlist[];
}
export interface Playlist {
  activities: Activity[];
  icon: string;
  color: string;
}
export interface STERModel {
  selfLessNess: number;
  timeLessNess: number;
  effortLessNess: number;
  richNess: number;
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
