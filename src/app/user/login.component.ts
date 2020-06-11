// ng-fundamentalsnew\src\app\user\login.component.ts START
import {Component} from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  username;
  password;

  login(formatValues) {
    console.log(formatValues);
  }
}

// ng-fundamentalsnew\src\app\user\login.component.ts END
