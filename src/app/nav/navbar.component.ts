// ng-fundamentalsnew\src\app\nav\navbar.component.ts START
import {Component} from '@angular/core';
import {AuthService} from '../user/auth.service';
import {EventService, ISession} from '../events/shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {
      font-size: 15px;
    }

    #searchForm {
      margin-right: 100px;
    }

    @media (max-width: 1200px) {
      #searchForm {
        display: none
      }
    }

    li > a.active {
      color: #f97924;
    }
  `]
})

export class NavbarComponent {
  searchTerm: string = '';
  foundSessions: ISession[];

  constructor(public auth: AuthService, private eventService: EventService) {
  }

  searchSession(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe
    (sessions => {
      this.foundSessions = sessions;
      console.log(this.foundSessions);
    });
  }

}

// ng-fundamentalsnew\src\app\nav\navbar.component.ts END
