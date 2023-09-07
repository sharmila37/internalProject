import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  employee:any={};
  constructor(private router: Router,private service:ServiceService) {}

  addEmployee(): void {
    this.router.navigate(['/add-employee']); 
  }
  doSomething(): void {
    alert('Button Clicked!');
  }
  onClick(){
    this.router.navigate(['/add-employee']);
  }
  
}
