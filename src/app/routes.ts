// ng-fundamentalsnew\src\app\routes.ts START
import {Routes} from '@angular/router';
import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {CreateEventComponent} from './events/create-event.component';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent},
  //important: have /new before /:id on this /events route, if not Angular will think the "new" is an ":id"
  {path: 'events', component: EventsListComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
];
// ng-fundamentalsnew\src\app\routes.ts END
