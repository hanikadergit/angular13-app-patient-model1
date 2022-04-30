import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { PatientsService } from 'src/app/services/patients.service';
import { PatientActionsTypes } from 'src/app/state/patient.state';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  patientId:number;
  patientFormGroup?:FormGroup;

  submitted:boolean=false;
  constructor(private activatedRoute:ActivatedRoute, 
    private patientsService:PatientsService,
    private eventDrivenService: EventDrivenService,
    private fb:FormBuilder) {
    this.patientId=activatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
    this.patientsService.getPatient(this.patientId)
    .subscribe(patient => {
     this.patientFormGroup= this.fb.group({
      id:[patient.id,Validators.required],
      nom:[patient.nom,Validators.required],
      prenom:[patient.prenom,Validators.required],
      sexe:[patient.sexe,Validators.required],
      age:[patient.age,Validators.required],
      tour:[patient.tour,Validators.required],
      servi:[patient.servi,Validators.required],
      absent:[patient.servi,Validators.required],
    })
    } );
  }
  onUpdatePatient(){
    this.patientsService.updatePatient(this.patientFormGroup?.value)
    .subscribe(data => {
      this.eventDrivenService.publishEvent({type:PatientActionsTypes.PATIENT_UPDATED})
      alert("Success patient updated")
    })
  }
}
