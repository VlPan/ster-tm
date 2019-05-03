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

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];


@NgModule({
  declarations: [
    AppComponent
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
  ],
  providers: [ActivityService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
