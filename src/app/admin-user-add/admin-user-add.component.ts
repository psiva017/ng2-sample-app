import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AppSetting } from '../app-setting.service';
@Component({
  selector: 'app-admin-user-add',
  templateUrl: './admin-user-add.component.html',
  styleUrls: ['./admin-user-add.component.css']
})
export class AdminUserAddComponent implements OnInit {

user: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      name:['Siva',Validators.required],
      emails: this.fb.group({
        email: ['',[Validators.required,Validators.minLength(6)]],
        communicationEmail:['',[Validators.required]]
      }),
      mobile:['',[Validators.required,Validators.pattern(AppSetting.NUMBER_ONLY_REGEX),Validators.minLength(10),Validators.maxLength(10)]]
    });
  }


  addAdminuser(user){
    console.log(JSON.stringify(user._value));
  }
}