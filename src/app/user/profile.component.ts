// ng-fundamentalsnew\src\app\user\profile.component.ts START
import {Component, OnInit, Inject} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';
import {ToastrService, TOASTR_TOKEN} from '../common';

@Component({
  templateUrl: './profile.component.html',
  styles: [`
    em {
      float: right;
      color: #E05C65;
      padding-left: 10px;
    }

    .error input {
      background: #E3C3C3;
    }

    .error input {
      background: #E3C3C3;
    }

    .error ::-webkit-input-placeholder {
      color: #999;
    }

    .error ::-moz-placeholder {
      color: #999;
    }

    .error :-moz-placeholder {
      color: #999;
    }

    .error :-ms-input-placeholder {
      color: #999;
    }
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstName: FormControl;
  private lastName: FormControl;

  constructor(private authService: AuthService, private router: Router,
              @Inject(TOASTR_TOKEN) private toastr: ToastrService) {
  }

  ngOnInit() {
    this.firstName = new FormControl(this.authService.currentUser.firstName,
      [Validators.required, Validators.pattern('[a-zA-Z ]*')]);
    this.lastName = new FormControl(this.authService.currentUser.lastName, Validators.required);
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
        .subscribe(() => {
          console.log('first name:' + this.authService.currentUser.firstName + ', last name: ' + this.authService.currentUser.lastName);
          // this.router.navigate(['events']); //before using TOASTR_TOKEN
          this.toastr.success('Profile Saved');
        });
    }
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/user/login']);
    });
  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.untouched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.untouched;
  }

  cancel() {
    this.router.navigate(['events']);
  }
}

// ng-fundamentalsnew\src\app\user\profile.component.ts END
