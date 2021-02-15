import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { users } from './mock-database';
import { UserProfile } from './user-profile';

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(
    private router: Router
  ) { }

  // auth with fake data
  login(data: UserProfile): any {
    let authUser;
    of(users)
    .subscribe(result => {
      const userDatabase = result;
      authUser = userDatabase.filter(user => {
        return user.email === data.email;
      });
    });
    return authUser;
  }

  logout(): void {
    localStorage.removeItem(`user`);
    this.router.navigate(['']);
  }
}
