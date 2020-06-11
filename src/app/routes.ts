// ng-fundamentalsnew\src\app\routes.ts START
import {Routes} from '@angular/router';
import {Error404Component} from './errors/404.component';
import {
  EventsListComponent,
  EventDetailsComponent,
  CreateEventComponent,
  EventRouteActivator,
  EventsListResolver
} from './events';

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  //important: have /new before /:id on this /events route, if not Angular will think the "new" is an ":id"
  {path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver}},
  {path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  {path: '404', component: Error404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
];
// ng-fundamentalsnew\src\app\routes.ts END
