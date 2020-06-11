// ng-fundamentals\src\app\events\event-details\event-route-activator.service.ts START
import {Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import {Injectable} from '@angular/core';
import {EventService} from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot) {
  // “!!” cast to a boolean and cast event id to the number “+”
    const eventExists = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}

// ng-fundamentals\src\app\events\event-details\event-route-activator.service.ts END
