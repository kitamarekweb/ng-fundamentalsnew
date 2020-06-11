// ng-fundamentalsnew\src\app\events\event-details\session-list.component.ts START
import {Component, Input} from '@angular/core';
import {ISession} from '../shared';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})

export class SessionListComponent {
  @Input() sessions: ISession[];
}

// ng-fundamentalsnew\src\app\events\event-details\session-list.component.ts END
