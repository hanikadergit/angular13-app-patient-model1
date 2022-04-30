import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/model/patient.model';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { PatientsService } from 'src/app/services/patients.service';
import { ActionEvent, AppDataState, DataStateEnum, PatientActionsTypes } from 'src/app/state/patient.state';
import { catchError, map, Observable, of, startWith } from 'rxjs';
@Component({
  selector: 'app-salle-att-princ',
  templateUrl: './salle-att-princ.component.html',
  styleUrls: ['./salle-att-princ.component.css']
})
export class SalleAttPrincComponent implements OnInit {
  patients$:Observable<AppDataState<Patient[]>>|null=null;
  readonly DataStateEnum = DataStateEnum;
  constructor(private patientService:PatientsService, 
    private router:Router,
    private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.
    subscribe((actionEvent:ActionEvent)=>{
      this.onActionEvent(actionEvent);
    })

  }

  onGetAllPatients(){
    this.patients$ =  this.patientService.getAllPatients().pipe(
      map(data=>{
        return({dataState: DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR,errorMessage:err.errorMessage}))
    );
  }
  onGetPatientsSalleAttente(){
    
    this.patients$ =  this.patientService.getPatientsSalleAttente().pipe(
      map(data=>{        
        return({dataState: DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR,errorMessage:err.errorMessage}))
    );
  }

  onSearch(dataForm:any){
    this.patients$ =  this.patientService.searchPatients(dataForm.keyword).pipe(
      map(data=>{        
        return({dataState: DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR,errorMessage:err.errorMessage}))
    );
  }
  onDelete(p:Patient){
    let v=confirm('Etes vous sûre de vouloir supprimer cet enregistrement?');
    if (v==true)
    this.patientService.deletePatient(p)
    .subscribe(data=>{
      this.onGetPatientsSalleAttente();
    })
  }
  onExamPatient(patient:Patient){
    let v=confirm('Servi ce Patient?');
    if (v==true)
    this.patientService.serviPatient(patient)
    .subscribe(data=>{
      this.onGetPatientsSalleAttente();
    })    
  }
  onNewPatient(){
    this.router.navigateByUrl("/newPatient");
  }
  onEdite(p:Patient){
    this.router.navigateByUrl("/editPatient/"+p.id); 
  }

  onAbsentPatient(patient:Patient){
    this.patientService.absentPatient(patient)
    .subscribe(data=>{
      this.onGetPatientsSalleAttente();
    })    
  }
  onActionEvent($event:ActionEvent){
    switch($event.type){
      case PatientActionsTypes.GET_ALL_PATIENTS: this.onGetAllPatients(); break; 
      case PatientActionsTypes.GET_PATIENTS_SALLE_ATTENT: this.onGetPatientsSalleAttente(); break; 
      case PatientActionsTypes.SEARCH_PATIENTS: this.onSearch($event.payload); break; 
      case PatientActionsTypes.NEW_PATIENT: this.onNewPatient(); break;
      case PatientActionsTypes.EDIT_PATIENT: this.onEdite($event.payload); break;
      case PatientActionsTypes.DELETE_PATIENT: this.onDelete($event.payload); break;
      case PatientActionsTypes.EXAM_PATIENT: this.onExamPatient($event.payload); break;
      case PatientActionsTypes.ABSENT_PATIENT: this.onAbsentPatient($event.payload); break;
    }
  }
}
