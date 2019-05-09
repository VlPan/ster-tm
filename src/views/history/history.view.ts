import { ActivityHistoryItem } from './../../app/store/models/activity-history.model';
import { LoadActivityHistory } from './../../app/store/actions/activity-history.actions';
import { AppState } from './../../app/store/reducers/index';
import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getActivityHistory } from 'src/app/store/selectors/activities-history.selectors';


@Component({
  selector: 'st-history',
  templateUrl: './history.view.html',
  styleUrls: ['./history.view.scss']
})
export class HistoryView implements OnInit {

  constructor(private store: Store<AppState>) { }
  activityHistory$: Observable< ActivityHistoryItem[] >;

  ngOnInit() {
    this.store.dispatch(new LoadActivityHistory());
    this.activityHistory$ = this.store.select(getActivityHistory);
  }

}
