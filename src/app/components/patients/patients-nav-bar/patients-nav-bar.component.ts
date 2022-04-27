import { Component, OnInit, EventEmitter } from '@angular/core';
import {  Output } from '@angular/core';
import { ActionEvent, PatientActionsTypes } from 'src/app/state/patient.state';
@Component({
  selector: 'app-patients-nav-bar',
  templateUrl: './patients-nav-bar.component.html',
  styleUrls: ['./patients-nav-bar.component.css']
})
export class PatientsNavBarComponent implements OnInit {
  @Output() patientEnventEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onGetAllPatients(){
    this.patientEnventEmitter
    .emit({type:PatientActionsTypes.GET_ALL_PATIENTS} );
  }
  onGetPatientsSalleAttente(){
    this.patientEnventEmitter
    .emit({type:PatientActionsTypes.GET_PATIENTS_SALLE_ATTENT} );    
  }
  onGetPatientsAttenteMedecin(){
    this.patientEnventEmitter
    .emit({type:PatientActionsTypes.GET_PATIENTS_ATT_MED} );
  }
  onGetPatientsAttenteSoin(){
    this.patientEnventEmitter
    .emit({type:PatientActionsTypes.GET_PATIENTS_ATT_SOIN} );
  }
  onNewPatient(){
    this.patientEnventEmitter
    .emit({type:PatientActionsTypes.NEW_PATIENT} );
  }
  onSearch(dataForm:any){
    this.patientEnventEmitter
    .emit({type:PatientActionsTypes.SEARCH_PATIENTS,payload:dataForm} );
  }
  onActionEvent($event:any){

  }
}
