import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router) {}

  addEmployee(): void {
    this.router.navigate(['/add-employee']); 
  }
  doSomething(): void {
    this.router.navigate(['/create']);
  }

}
