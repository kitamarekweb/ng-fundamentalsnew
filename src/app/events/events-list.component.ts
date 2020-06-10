// ng-fundamentalsnew\src\app\events\events-list.component.ts START
import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr>
      <div class="well">
        <div>Hello world again...</div>
        <img src="../../assets/images/basic-shield.png" alt="basic shield Angular" />
      </div>
      <event-thumbnail (eventClick)="handleEventClicked($event)"
                       #thumbnail [event]="eventOne"></event-thumbnail>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
      <h3>{{thumbnail.someProperty}}</h3>
    </div>
  `,
  styles: [`
    .well div { color: darkorange; }
  `]
})

export class EventsListComponent {
  eventOne = {
    id: 1,
    name: 'Angular Connect - Event One',
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

  handleEventClicked(data) {
    console.log('recieved:', data);
  }

}

// ng-fundamentalsnew\src\app\events\events-list.component.ts END
