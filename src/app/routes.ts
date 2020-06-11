// ng-fundamentalsnew\src\app\routes.ts START
import {Routes} from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event.component';
import {Error404Component} from './errors/404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventsListResolver} from './events/events-list-resolver.service';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  //important: have /new before /:id on this /events route, if not Angular will think the "new" is an ":id"
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
];
// ng-fundamentalsnew\src\app\routes.ts END
