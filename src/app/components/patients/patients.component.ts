import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Patient } from 'src/app/model/patient.model';
import { PatientsService} from 'src/app/services/patients.service';
import { AppDataState, DataStateEnum } from 'src/app/state/patient.state';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients$:Observable<AppDataState<Patient[]>>|null=null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private patientService:PatientsService, private router:Router) { }

  ngOnInit(): void {
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
  onPatientsAttenteMedecin(){
    
    this.patients$ =  this.patientService.getPatientsAttenteMedecin().pipe(
      map(data=>{        
        return({dataState: DataStateEnum.LOADED,data:data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err => of({dataState: DataStateEnum.ERROR,errorMessage:err.errorMessage}))
    );
  }
  ongetPatientsAttenteSoin(){
    this.patients$ =  this.patientService.getPatientsAttenteSoin().pipe(
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
    let v=confirm('هل تريد فعلا حذف هذا التسجيل');
    if (v==true)
    this.patientService.deletePatient(p)
    .subscribe(data=>{
      this.onGetAllPatients();
    })
  }
  onNewPatient(){
    this.router.navigateByUrl("/newPatient");
  }
  onEdite(p:Patient){
    this.router.navigateByUrl("/editPatient/"+p.id); 
  }
}
