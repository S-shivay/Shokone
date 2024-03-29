import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormControl, FormGroup, Validators } from '@angular/forms';
import { ModelPojo } from 'src/app/model/user.model';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-updateinternaluser',
  templateUrl: './updateinternaluser.component.html',
  styleUrls: ['./updateinternaluser.component.css']
})
export class UpdateinternaluserComponent implements OnInit {
  userForm!: FormGroup;
  hide = true;

  constructor(private formBuilder: FormBuilder,private userService:UserserviceService) {
   }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmpassword: [''],
      Preferredtimezone: [''],
    });
  }
  onSubmit(userData :FormGroup) {
    console.log('Valid?', userData.valid); // true or false
    console.log('Value', userData.value);
    this.userService.saveUser(userData.value)
    .subscribe((data: ModelPojo)=>{
      console.log(data);
    }) 
 }}
//  email = new FormControl('', [Validators.required, Validators.email]);

//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'You must enter a value';
//     }

//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }

// 

