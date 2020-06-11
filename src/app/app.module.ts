// ng-fundamentalsnew\src\app\app.module.ts START
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from "./events/create-event.component";
import {Error404Component} from './errors/404.component';

import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';

import {EventService} from './events/shared/event.service';
import {ToastrService} from './common/toastr.service';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}

// ng-fundamentalsnew\src\app\app.module.ts END
