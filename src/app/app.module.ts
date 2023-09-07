import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { CreateComponent } from './create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    AddEmployeeComponent,
    CreateComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    NgModule,
    AppRoutingModule,
    FormsModule,
<<<<<<< HEAD
    HttpClientModule
=======
    ReactiveFormsModule,
    HttpClientModule,



>>>>>>> 22b78fab6dc189bb871abab42674750dcdf6f569
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
