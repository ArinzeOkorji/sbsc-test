import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: any;

  constructor(
    private authS: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  submit(form: NgForm): void {
    const user = this.authS.login(form.value);
    if (user.length > 0) {
      localStorage.setItem(`user`, JSON.stringify(user[0]));
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = `No user was found`;
    }
  }

}
