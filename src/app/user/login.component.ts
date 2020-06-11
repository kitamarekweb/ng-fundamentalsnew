// ng-fundamentalsnew\src\app\user\login.component.ts START
import {Component} from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }
  `]
})

export class LoginComponent {
  username;
  password;
  mouseoverLogin;

  constructor(private authService: AuthService, private router: Router) {
  }

  login(formatValues) {
    console.log(formatValues);
    this.authService.loginUser(formatValues.userName, formatValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }

}

// ng-fundamentalsnew\src\app\user\login.component.ts END
