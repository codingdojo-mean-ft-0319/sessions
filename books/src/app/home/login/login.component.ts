import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models';
import { AuthService } from '../../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  loginErrors: string[] = [];

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.login(user).subscribe(
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
    this.loginErrors = Array.isArray(errors) ? errors : [errors];
  }
}
