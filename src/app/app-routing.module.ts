import { CardComponent } from './../components/card/card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundView } from 'src/views/page-not-found/page-not-found.view';
import { ActivitiesView } from 'src/views/activities/activities.view';

const routes: Routes = [
  { path: 'activities', component: ActivitiesView },
  // { path: '',
  //   component: RandomizePageComponent,
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'history',
  //   component: HistoryComponent,
  // },
  // { path: '**', component: PageNotFoundView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule],
  declarations: [

    // CardComponent
  ]
})
export class AppRoutingModule { }
