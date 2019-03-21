import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user = new User();
  registrationErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.register(user).subscribe(
      loggedUser => {
        console.log(loggedUser);
        this.router.navigateByUrl('books');
      },
      error => {
        console.log(error);
        this.handleErrors(error.error);
      }
    );
  }

  handleErrors(errors: string | string[]): void {
    this.registrationErrors = Array.isArray(errors) ? errors : [errors];
  }
}
