// ng-fundamentalsnew\src\app\app.module.ts START
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {EventsAppComponent} from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventService,
  EventsListResolver,
  EventRouteActivator,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events';

import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';

import {AuthService} from "./user/auth.service";
import {
  JQ_TOKEN,
  ToastrService,
  TOASTR_TOKEN,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective
} from './common';

let toastr: ToastrService = window['toastr'];
let jQuery = window['$'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavbarComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    EventService,
    {provide: TOASTR_TOKEN, useValue: toastr},
    {provide: JQ_TOKEN, useValue: jQuery},
    ToastrService,
    {provide: EventRouteActivator, useClass: EventRouteActivator}, //the same as below
    // EventRouteActivator, //the same as above
    EventsListResolver,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?');
  return true;
}

// ng-fundamentalsnew\src\app\app.module.ts END
