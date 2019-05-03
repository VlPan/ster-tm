import { ActivityHistoryEffects } from './activityHistory.effects';
import { ActivitiesEffects } from './activities.effects';


export const effects: any[] = [ActivityHistoryEffects, ActivitiesEffects];

export * from './activities.effects';
export * from './activityHistory.effects';