import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientsComponent } from './components/patients/patients.component';
import { SalleAttPrincComponent } from './components/salle-att-princ/salle-att-princ.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { DeleteUserComponent } from './users/delete-user/delete-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewUserComponent } from './users/view-user/view-user.component';




/*
const routes: Routes = [
  {path:"patients", component:PatientsComponent},
  {path:"newPatient", component:PatientAddComponent},
  {path:"attentPatient", component:SalleAttPrincComponent},
  {path:"editPatient/:id", component:PatientEditComponent},
  {path:"",component:HomeComponent}
];*/
const routes: Routes = [
  { path:'users',
    children:[
      {path:"view/:id", component:ViewUserComponent},
      {path:"list", component:ListUsersComponent},
      {path:"delete/:id", component:DeleteUserComponent},
      {path:"edit/:id", component:EditUserComponent},
      {path:"createuser", component:AddUserComponent},
    ]
  },
  { path: 'roles', loadChildren: () => import('./roles/roles.module').then(m => m.RolesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
