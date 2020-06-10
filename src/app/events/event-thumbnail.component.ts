// ng-fundamentalsnew\src\app\events\event-thumbnail.component.ts START
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <div>Time: {{event?.time}}</div>
      <div>Price: \${{event?.price}}</div>
      <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
        Online URL: {{event.onlineUrl}}
      </div>
      <button class="btn btn-sm btn-primary" (click)="handleClickMe()">
        Click me!
      </button>
    </div>
  `,
  styles: [`
    .thumbnail {
      min-height: 210px;
    }

    .pad-left {
      margin-left: 25px;
    }

    .well div {
      color: #bbb;
    }
  `]
})

export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  someProperty: any = 'some property showing';

  handleClickMe() {
    console.log('clicked');
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('foo from template reference variable');
  }

}

// ng-fundamentalsnew\src\app\events\event-thumbnail.component.ts END
