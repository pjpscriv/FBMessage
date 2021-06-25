import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExplanationModalComponent } from './modals/explanation-modal/explanation-modal.component';
import { ProcessingModalComponent } from './modals/processing-modal/processing-modal.component';
import { ExploreModalComponent } from './modals/explore-modal/explore-modal.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FiltersComponent } from './main/filters/filters.component';
import { DateDensityComponent } from './main/date-density/date-density.component';
import { TimeDensityComponent } from './main/time-density/time-density.component';
import { MessageDisplayComponent } from './main/message-display/message-display.component';
import { MainViewComponent } from './main/main-view/main-view.component';
import { ThreadListComponent } from './main/thread-list/thread-list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatBadgeModule } from '@angular/material/badge';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AngularResizedEventModule } from 'angular-resize-event';

import {
  messagesReducer,
  loadProgressReducer,
  threadsReducer
} from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ExplanationModalComponent,
    ProcessingModalComponent,
    ExploreModalComponent,
    NavBarComponent,
    FiltersComponent,
    DateDensityComponent,
    TimeDensityComponent,
    MessageDisplayComponent,
    MainViewComponent,
    ThreadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatBadgeModule,
    StoreModule.forRoot({
      messages: messagesReducer,
      loadProgress: loadProgressReducer,
      threads: threadsReducer
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({}),
    AngularResizedEventModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
