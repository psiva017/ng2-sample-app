import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    user: User;
  constructor() { }

  ngOnInit() {
this.user = new User();
  }

addNewuser(newUserForm){
console.log(newUserForm.controls.name._value);

}
}
