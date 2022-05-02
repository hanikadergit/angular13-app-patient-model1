import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId:string='';
  userDetails:any;
  dataloaded : boolean = false;
  editUserForm: FormGroup = new FormGroup({});
  constructor(
    private activatedRoute:ActivatedRoute,
    private userService: UserService,
    private formBuiler: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.dataloaded = false;
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    });
    if (this.userId !== ''){
      this.userService.viewUsers(this.userId)
      .toPromise()
      .then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails,data);
        this.editUserForm = this.formBuiler.group({
          'username': new FormControl(this.userDetails.name),
          'email': new FormControl(this.userDetails.email)
        })
        this.dataloaded = true;
      })
      .catch(err=>{

      })
    }
  }
  updateUser(){
    this.userService.updateUsers(this.userId,this.editUserForm.value).subscribe( data => {
      this._snackBar.open("User updated successfully");
      this.router.navigate(["users/list"]);
    },err => {
      this._snackBar.open("unable to update user");
    })
  }

}
