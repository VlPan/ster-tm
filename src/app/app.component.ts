import { AddActivityHistory, DeleteActivityHistory } from './store/actions/activity-history.actions';
import { LoadActivities, AddActivity, PageDestroyed, DeleteActivity, UpdateActivity } from './store/actions/activities.actions';
import { ActivitiesState, Activity } from './store/models/activity.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { getActivities } from './store/selectors/activities.selectors';
import { Observable } from 'rxjs';
import { Link } from './store/models/navigation-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  activities$: Observable<Activity[]>;
  constructor(private store: Store<ActivitiesState>) {}

  links: Link[] = [
    {
      name: 'Random',
      value: '/',
      icon: 'fa fa-random menu__icon'

    },
    {
      name: 'Activities',
      value: '/activities',
      icon: 'fa fa-adn menu__icon'
    },
    {
      name: 'Activities History',
      value: '/history',
      icon: 'fa fa-history menu__icon'
    },
  ];

  // public addHistoryForActivity(activity: Activity) {
  //   this.store.dispatch(new AddActivityHistory({activity, time: 25, scores: 25, }));
  // }

  public deleteActivityHistory(activity: Activity) {
    this.store.dispatch(new DeleteActivityHistory(activity.id));
  }

  ngOnInit() {
    this.store.dispatch(new LoadActivities());
  }
}
