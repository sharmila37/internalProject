import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { LoginComponent } from './login/login.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {path:'admin', component:AdminComponent},
  {path:'user', component:UserComponent},
<<<<<<< HEAD
  {path:'add-employee', component:AddEmployeeComponent},
  {path:'', component:LoginComponent}
=======
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'', component:LoginComponent},
  {path:'create', component:CreateComponent},
>>>>>>> 22b78fab6dc189bb871abab42674750dcdf6f569

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
