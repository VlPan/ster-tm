import { RandomActivityView } from 'src/views/random-activity/random-activity.view';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesView } from 'src/views/activities/activities.view';
import { HistoryView } from 'src/views/history/history.view';

const routes: Routes = [
  { path: 'activities', component: ActivitiesView },
  { path: 'history', component: HistoryView },
  { path: '',
    component: RandomActivityView,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [

    // CardComponent
  ]
})
export class AppRoutingModule { }
