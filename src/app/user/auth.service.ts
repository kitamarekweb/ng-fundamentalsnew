// ng-fundamentalsnew\src\app\user\auth.service.ts START
import {Injectable} from '@angular/core';
import {IUser} from './user.model';

@Injectable()

export class AuthService {
  currentUser: IUser;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'John',
      lastName: password
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}

// ng-fundamentalsnew\src\app\user\auth.service.ts END
