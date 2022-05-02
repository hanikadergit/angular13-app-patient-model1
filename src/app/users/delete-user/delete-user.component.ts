import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  userId : string = '';
  constructor(
    private activatedRoute:ActivatedRoute,
    private userService: UserService,
    private _snackBar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data['id'];
    });
    if (this.userId){
      this.userService.deleteUsers(this.userId).subscribe( data => {
       this._snackBar.open("user deleted successfully") ;
       this.router.navigate(["users/list"]);
      }, err => {
        this._snackBar.open("unable to  delete the user") ;
      })
    }
  }

}
