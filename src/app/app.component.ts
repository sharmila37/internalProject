import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  username: string = '';
  password: string = '';

  constructor(private authService:ServiceService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      if (this.authService.isAdmin()) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/user']);
      }
    } else {
    }
  }
}
