import { Component } from '@angular/core';
import { UserService,UserDetailService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers:[UserService,UserDetailService]
})
export class UserListComponent  {
loading = true;
users: User[];
obj:any;
errorMessage: String;


  constructor(private userService: UserService,private userDetailService: UserDetailService) {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
    this.getusers();
    
    // --- Test Call ------
    this.testCall()
  }

 getusers() {
    this.userService.testCall()
                     .subscribe(
                       users => this.users = users,
                       error =>  this.errorMessage = <any>error);
  }


// ------ Test Call -----------
  testCall(){
      console.log("this.obj");
    this.userService.testCall().subscribe(obj =>console.log(obj)
    );
  }
}
