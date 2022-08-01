import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelPojo } from 'src/app/model/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-addclientaccount',
  templateUrl: './addclientaccount.component.html',
  styleUrls: ['./addclientaccount.component.css']
})
export class AddclientaccountComponent implements OnInit {

  userForm!: FormGroup;
  hide = true;


  constructor(private formBuilder: FormBuilder,private userService:UserserviceService) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      legalName: [''],
      friendlyName: [''],
      password: [''],
      confirmpassword: [''],
      Accounttype: [''],
      parentaccount: [''],
      primaryaccountmanager: [''],
    });
  }

  onSubmit(userData :FormGroup) {
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.userService.saveUser(userData.value)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
    }) 
 }
}
