// ng-fundamentalsnew\src\app\events\event-thumbnail.component.ts START
import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <h2>{{event?.name}}</h2>
      <div>Date: {{event?.date}}</div>
      <!--      ================================ -->
      <!--      ========== Time START ========== -->
      <!--      ================================ -->

<!--======== Styling Components with ngClass START ============================================-->
      <!--      <div [class.green]="event?.time === '8:00 am'" //Class Binding-->
      <!--      <div [ngClass]="{pink: event?.time === '8:00 am', bold: event?.time === '8:00 am'}" //ngClass-->
      <!--      <div class="well" [ngClass]="getStartTimeClass()" //additional to well style it will also have ngClass or Class Binding-->
<!--      <div [ngClass]="getStartTimeClass()"-->
<!--           [ngSwitch]="event?.time">-->
<!--======== Styling Components with ngClass END ==============================================-->

<!--======== Styling Components with ngStyle START ============================================-->
        <!--      <div [style.color]="event?.time === '8:00 am' ? '#003300' : 'red'"-->
        <!--           [ngSwitch]="event?.time">      -->
        <!--      <div [ngStyle]="{'color': event?.time === '8:00 am' ? '#003300' : 'red',-->
        <!--                        'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'}"-->
        <div [ngStyle]="getStartTimeStyle()"
             [ngSwitch]="event?.time">
<!--======== Styling Components with ngStyle END ==============================================-->

        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
        </div>
      <!--      ============================== -->
      <!--      ========== Time END ========== -->
      <!--      ============================== -->
      <div>Price: \${{event?.price}}</div>
      <div [hidden]="!event?.location"> <!--      <div *ngIf="event?.location">-->
        <span>Location: {{event?.location?.address}}</span>
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
      </div>
      <div [hidden]="!event?.onlineUrl"> <!--      <div *ngIf="event?.onlineUrl">-->
        Online URL: {{event.onlineUrl}}
      </div>
      <button class="btn btn-sm btn-primary" (click)="handleClickMe()">
        Click me!
      </button>
    </div>
  `,
  styles: [`
    .green {
      color: #003300 !important;
    }

    .pink {
      color: pink !important;
    }

    .purple {
      color: purple !important;
    }

    .bold {
      font-weight: bold;
    }

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

  getStartTimeClass() {
    // // returning object {}
    // const isEarlyStart = this.event && this.event.time === '8:00 am'
    // return {pink: isEarlyStart, bold: isEarlyStart};

    // // returning string ''
    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // }
    // return '';

    // returning array []
    if (this.event && this.event.time === '8:00 am') {
      return ['purple', 'bold'];
    }
    return [];
  }

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: 'yellow', 'font-weight': 'bold'};
    }
    return {};
  }


  handleClickMe() {
    console.log('clicked');
    this.eventClick.emit(this.event.name);
  }

  logFoo() {
    console.log('foo from template reference variable');
  }

}

// ng-fundamentalsnew\src\app\events\event-thumbnail.component.ts END
