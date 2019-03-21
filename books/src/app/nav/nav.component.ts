import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isAuthed = false;

  constructor(
    private readonly router: Router,
    private readonly auth: AuthService
  ) {}

  ngOnInit() {
    this.auth.isAuthed$.subscribe(authed => {
      this.isAuthed = authed;
      console.log('is authed ?', authed);
    });
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
