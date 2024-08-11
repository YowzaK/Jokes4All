import { Router } from '@angular/router';
import { AuthServiceService } from './Services/auth-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private authservice: AuthServiceService,
    private router: Router
  ) {}

  isAuthenticated() {
    return this.authservice.isAuthenticated;
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['']);
  }
  title = 'jokes4all';
}
