// ng-fundamentalsnew\src\app\app.module.ts START
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {EventsAppComponent} from './events-app.component';
import {NavbarComponent} from './nav/navbar.component';
import {Error404Component} from './errors/404.component';
import {CollapsibleWellComponent} from "./common/collapsible-well.component";

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

import {ToastrService, TOASTR_TOKEN} from './common/toastr.service';
import {AuthService} from "./user/auth.service";

declare let toastr: ToastrService;

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
