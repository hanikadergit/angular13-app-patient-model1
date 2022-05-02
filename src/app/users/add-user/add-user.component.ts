import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserForm : FormGroup = new FormGroup({});
  constructor(
    private formBuilder:FormBuilder, 
    private userService:UserService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'username': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'phone': new FormControl('',[Validators.required,Validators.maxLength(3)])
    })
  }
  creatUser(){
    this.userService.addUsers(this.addUserForm.value).subscribe( data => {
      this._snackBar.open("User created successfully");
      this.router.navigate(["users/list"]);
    },err => {
      this._snackBar.open("unable to create user");
    })
  }

}
