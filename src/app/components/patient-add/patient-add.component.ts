import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PatientsService } from 'src/app/services/patients.service';

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
  constructor(private fb:FormBuilder, private patientsService:PatientsService) { }

  ngOnInit(): void {
    this.patientFormGroup=this.fb.group({
      nom:["",Validators.required],
      prenom:["",Validators.required],
      sexe:["M",Validators.required],
      age:["0",Validators.required],
      enSalleAttente:[true,Validators.required],
      enFileAttenteSoin:[false,Validators.required],
      enFileAttenteMed:[false,Validators.required],
      tourSalle:["0",Validators.required]
    })
  }
  onSavePatient(){
    this.submitted=true;
    if(this.patientFormGroup.invalid) return;
    this.patientsService.savePatient(this.patientFormGroup.value)
    .subscribe(date => {
      alert('success Saving Patient');
    });
  }
}
