import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { tap } from 'rxjs/operators';

import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly base = '/api/auth';

  isAuthed$ = new BehaviorSubject<boolean>(this.isAuthed());

  constructor(
    private readonly http: HttpClient,
    private readonly cookieService: CookieService
  ) {}

  login(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.base}/login`, user)
      .pipe(tap(() => this.isAuthed$.next(true)));
  }

  register(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.base}/register`, user)
      .pipe(tap(() => this.isAuthed$.next(true)));
  }

  logout(): Observable<User> {
    return this.http
      .delete<User>(`${this.base}/logout`)
      .pipe(tap(() => this.isAuthed$.next(false)));
  }

  isAuthed(): boolean {
    const expired = parseInt(this.cookieService.get('expiration'), 10);
    const userId = this.cookieService.get('userID');
    const session = this.cookieService.get('session');

    return Boolean(session && expired && userId && expired > Date.now());
  }
}
