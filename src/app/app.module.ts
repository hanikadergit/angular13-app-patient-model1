import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PatientsComponent } from './components/patients/patients.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientsNavBarComponent } from './components/patients/patients-nav-bar/patients-nav-bar.component';
import { PatientsListComponent } from './components/patients/patients-list/patients-list.component';
import { PatientItemComponent } from './components/patients/patients-list/patient-item/patient-item.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PatientsComponent,
    HomeComponent,
    PatientAddComponent,
    PatientEditComponent,
    PatientsNavBarComponent,
    PatientsListComponent,
    PatientItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
