import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService:ServiceService, private router: Router) {}

  login(): void {
    if (this.username === 'admin' && this.password === 'admin@123') {
      this.router.navigate(['/admin']);
      alert('logged in successful');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }
}
