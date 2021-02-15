import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(
    private authS: AuthService
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.authS.logout();
  }
}
