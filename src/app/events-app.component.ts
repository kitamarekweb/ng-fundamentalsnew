// ng-fundamentalsnew\src\app\events-app.component.ts START
import {Component} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
    <div class="container">
      <nav-bar></nav-bar>
      <events-list></events-list>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {
  title = 'app works!';
}

// ng-fundamentalsnew\src\app\events-app.component.ts END
