import { HistoryItemComponent } from './../components/history-item/history-item.component';
import { HistoryView } from './../views/history/history.view';
import { DeleteActivityDialogComponent } from './../components/delete-dialog/delete-dialog';
import { AddActivityDialogComponent } from './../components/add-activity-dialog/add-activity-dialog.component';
import { CardComponent } from './../components/card/card.component';
import { NavigationComponent } from './../components/navigation/navigation.component';
import { ActivitiesEffects } from './store/effects/activities.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { storeFreeze } from 'ngrx-store-freeze';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule, MetaReducer} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { ActivityService } from './services/activity.service';
import { reducers } from './store/reducers';
import { effects } from './store/effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivitiesView } from 'src/views/activities/activities.view';
import { PageNotFoundView } from 'src/views/page-not-found/page-not-found.view';
import { SeporatorComponent } from 'src/components/seporator/seporator.component';
import { UpdateActivityDialogComponent } from 'src/components/update-activity-dialog/update-activity-dialog.component';
import { RandomActivityView } from 'src/views/random-activity/random-activity.view';
import { ActivtyDoneDialogComponent } from 'src/components/activty-done-dialog/activty-done-dialog.component';

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CardComponent,
    ActivitiesView,
    PageNotFoundView,
    CardComponent,
    SeporatorComponent,
    AddActivityDialogComponent,
    DeleteActivityDialogComponent,
    UpdateActivityDialogComponent,
    RandomActivityView,
    ActivtyDoneDialogComponent,
    HistoryView,
    HistoryItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    EffectsModule.forRoot(effects),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ActivityService, AngularFirestore],
  bootstrap: [AppComponent],
  entryComponents: [
    AddActivityDialogComponent,
    DeleteActivityDialogComponent,
    UpdateActivityDialogComponent,
    ActivtyDoneDialogComponent
  ]

})
export class AppModule { }
