// ng-fundamentalsnew\src\app\events\events-list-resolver.service.ts START
import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {EventService} from './shared';

@Injectable()
export class EventsListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {

  }

  resolve() {
    console.log('getting data from http request');
    return this.eventService.getEvents();
  }
}

// ng-fundamentalsnew\src\app\events\events-list-resolver.service.ts END
