import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

    user: User;
    public mask = [ /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  constructor() { }

  ngOnInit() {
this.user = new User();
  }
  disableRC(e){
    return false;
  }

addNewuser(newUserForm){
console.log(newUserForm.controls.name._value);

}
}
