// ng-fundamentalsnew\src\app\events-app.component.ts START
import {Component} from '@angular/core';
import {AuthService} from "./user/auth.service";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
    <div class="container">
      <nav-bar></nav-bar>
      <!--we stopped using selector <events-list></events-list> because we switched to routes and we are using
       <router-outlet></router-outlet>-->
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class EventsAppComponent {

  constructor(private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.checkAuthenticationStatus();
  }
}

// ng-fundamentalsnew\src\app\events-app.component.ts END
