import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
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
import { StatsComponent } from './components/stats/stats.component';
import { SalleAttPrincComponent } from './components/salle-att-princ/salle-att-princ.component';
import { SalleAttPListComponent } from './components/salle-att-princ/salle-att-p-list/salle-att-p-list.component';
import { SalleAttPItemComponent } from './components/salle-att-princ/salle-att-p-list/salle-att-p-item/salle-att-p-item.component';
import { SalleAttPNavBarComponent } from './components/salle-att-princ/salle-att-p-list/salle-att-p-nav-bar/salle-att-p-nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UsersModule } from './users/users.module';
import {MatListModule} from '@angular/material/list';




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
    PatientItemComponent,
    StatsComponent,
    SalleAttPrincComponent,
    SalleAttPListComponent,
    SalleAttPItemComponent,
    SalleAttPNavBarComponent,
    

  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatListModule,
    MatSidenavModule,
    UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
