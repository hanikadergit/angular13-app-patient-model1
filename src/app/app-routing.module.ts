import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientsComponent } from './components/patients/patients.component';

const routes: Routes = [
  {path:"patients", component:PatientsComponent},
  {path:"newPatient", component:PatientAddComponent},
  {path:"editPatient/:id", component:PatientEditComponent},
  {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
