import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserListComponent } from './user-list/user-list.component';

import { LoggerService } from './logger.service';
import { AppSetting } from './app-setting.service';
import * as $ from 'jquery';
import { CustomCasePipe } from './custom-case.pipe';


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
    CustomCasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  // -------- Common services ( vaild for whole application ) ------
  providers: [LoggerService, AppSetting],
  bootstrap: [AppComponent]
})
export class AppModule { }
