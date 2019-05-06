import { ActivityHistoryEffects } from './activity-history.effects';
import { ActivitiesEffects } from './activities.effects';


export const effects: any[] = [ActivityHistoryEffects, ActivitiesEffects];

export * from './activities.effects';
export * from './activity-history.effects';
