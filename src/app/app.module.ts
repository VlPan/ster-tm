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

import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { ActivityService } from './services/activity.service';
import { activtiesReducer } from './store/reducers/activities.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    EffectsModule.forRoot([ActivitiesEffects]),
    StoreModule.forRoot({
      activities: activtiesReducer
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [ActivityService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
