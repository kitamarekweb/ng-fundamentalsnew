// ng-fundamentalsnew\src\app\events\events-list.component.ts START
import {Component, OnInit} from '@angular/core';
import {EventService, IEvent} from './shared';
import {ToastrService} from '../common';
import {ActivatedRoute} from '@angular/router';

// declare let toastr: any;

@Component({
  // tslint:disable-next-line:component-selector
  // selector: 'events-list', // we do not need selector anymore because we are using routes now
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div class="col-md-5" *ngFor="let event of events">
          <event-thumbnail [event]="event"></event-thumbnail>
<!--          <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>-->
        </div>
      </div>
      <hr/>
      <event-thumbnail (eventClick)="handleEventClicked($event)"
                       #thumbnail [event]="eventOne"></event-thumbnail>
      <hr>
      <div class="well">
        <div>Hello world again...</div>
        <img src="../../assets/images/basic-shield.png" alt="basic shield Angular"/>
      </div>
      <h3>{{thumbnail.someProperty}}</h3>
      <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo</button>
    </div>
  `,
  styles: [`
    .well div {
      color: darkorange;
    }
  `]
})

export class EventsListComponent implements OnInit {

  constructor(private eventService: EventService, private toastr: ToastrService,
              private route: ActivatedRoute) {
  }

  events: IEvent[];

  eventOne = {
    id: 1,
    name: 'Angular Connect - Event One',
    date: new Date('11/11/2011'),
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    },
    onlineUrl: 'http//:some-page.html',
    sessions: [
      {
        id: 1,
        name: 'Using Angular 4 Pipes',
        presenter: 'Peter Bacon Darwin',
        duration: 1,
        level: 'Intermediate',
        abstract: `Learn all about the new pipes in Angular 4, both
          how to write them, and how to get the new AI CLI to write
          them for you. Given by the famous PBD, president of Angular
          University (formerly Oxford University)`,
        voters: ['bradgreen', 'igorminar', 'martinfowler']
      }
    ]
  };

  ngOnInit() {
    // this.eventServices.getEvents().subscribe(events => {this.events = events; });
    // we do not need that anymore because we are doing it in our events-list-resolver.service.ts
    this.events = this.route.snapshot.data['events'];

  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

  handleEventClicked(data) {
    console.log('recieved:', data);
  }

}

// ng-fundamentalsnew\src\app\events\events-list.component.ts END
