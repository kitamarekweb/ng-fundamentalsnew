// ng-fundamentalsnew\src\app\user\login.component.ts START
import {Component} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  username;
  password;

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
