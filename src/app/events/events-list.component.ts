// ng-fundamentalsnew\src\app\events\events-list.component.ts START
import {Component} from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent {
  event = {
    id: 1,
    name: 'Angular Connect',
    time: '10:00 am',
    date: '9/26/2036',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  };
}

// ng-fundamentalsnew\src\app\events\events-list.component.ts END
