// ng-fundamentalsnew\src\app\events\events-list-resolver.service.ts START
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from './shared/event.service';
import {map} from 'rxjs/operators';

@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }

  resolve() {
    console.log('async imitation');
    return this.eventService.getEvents().pipe(map(events => events));
  }
}

// ng-fundamentalsnew\src\app\events\events-list-resolver.service.ts END
