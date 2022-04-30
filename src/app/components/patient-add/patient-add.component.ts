import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { PatientsService } from 'src/app/services/patients.service';
import { PatientActionsTypes } from 'src/app/state/patient.state';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {
patientFormGroup:FormGroup=new FormGroup({
  nom:new FormControl(''),
  prenom:new FormControl(''),
  sexe:new FormControl('M'),
  age:new FormControl(0),
  enSalleAttente:new FormControl(true),
  enFileAttenteSoin:new FormControl(false),
  enFileAttenteMed:new FormControl(false),
  tourSalle:new FormControl(0) 
});
submitted:boolean=false;
  constructor(
    private fb:FormBuilder, 
    private patientsService:PatientsService,
    private  eventDrivenService: EventDrivenService) { }

  ngOnInit(): void {
    this.patientFormGroup=this.fb.group({
      nom:["",Validators.required],
      prenom:["",Validators.required],
      sexe:["M",Validators.required],
      age:["0",Validators.required],
      tour:["0",Validators.required],
      servi:[false,Validators.required],
      absent:[false,Validators.required]
    })
  }
  onSavePatient(){
    this.submitted=true;
    if(this.patientFormGroup.invalid) return;
    this.patientsService.savePatient(this.patientFormGroup.value)
    .subscribe(date => {
      this.eventDrivenService.publishEvent({type:PatientActionsTypes.PATIENT_ADDED})
      alert('success Saving Patient');
    });
  }
}
