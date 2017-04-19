import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { TextMaskModule } from 'angular2-text-mask';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';

import { LoggerService } from './logger.service';
import { AppSetting } from './app-setting.service';
import * as $ from 'jquery';
import { CustomCasePipe } from './custom-case.pipe';
import { AdminUserAddComponent } from './admin-user-add/admin-user-add.component';
import { InputOutputExamlpeComponent } from './input-output-examlpe/input-output-examlpe.component';
import { AllowNumbersDirective } from './allow-numbers.directive';
import { MobileMaskPipe } from './mobile-mask.pipe';


const appRoutes: Routes = [

  {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'login',
    component: LoginComponent
  }, {
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'users',
    component: UserListComponent
  }, {
    path: 'user-add',
    component: UserAddComponent
  }, {
    path: 'admin-user-add',
    component: AdminUserAddComponent
  }, {
    path: '',
    component: SignupComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    UserListComponent,
    UserAddComponent,
    CustomCasePipe,
    AdminUserAddComponent,
    InputOutputExamlpeComponent,
    AllowNumbersDirective,
    MobileMaskPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    TextMaskModule
    
  ],
  // -------- Common services ( vaild for whole application ) ------
  providers: [LoggerService, AppSetting],
  bootstrap: [AppComponent]
})
export class AppModule { }
