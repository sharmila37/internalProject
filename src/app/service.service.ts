import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private adminCredentials = { username: 'admin', password: 'admin123' };
  private userCredentials = { username: 'user', password: 'user123' };

  login(username: string, password: string): boolean {
    if (username === this.adminCredentials.username && password === this.adminCredentials.password) {
      localStorage.setItem('role', 'admin');
      return true;
    } else if (username === this.userCredentials.username && password === this.userCredentials.password) {
      localStorage.setItem('role', 'user');
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('role');
  }

  isAdmin(): boolean {
    return localStorage.getItem('role') === 'admin';
  }
}
