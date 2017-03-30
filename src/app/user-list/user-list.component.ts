import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService]
})
export class UserListComponent  {
loading = true;
users: User[];
errorMessage: String;


  constructor(private userService: UserService) {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    this.getusers();
    console.log(this.users);
    
  }

 getusers() {
    this.userService.getUsers()
                     .subscribe(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
  }

}
