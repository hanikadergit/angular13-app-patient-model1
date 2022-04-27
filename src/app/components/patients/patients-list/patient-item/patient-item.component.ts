import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';
import { ActionEvent, PatientActionsTypes } from 'src/app/state/patient.state';
import { PatientsService } from 'src/app/services/patients.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {
  @Input() patient:Patient|null=null;
  @Output() eventEmitter: EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }
  onEdite(ptient:Patient){
    this.eventEmitter.emit({type:PatientActionsTypes.EDIT_PATIENT,payload:ptient});
  }
  onDelete(ptient:Patient){
    this.eventEmitter.emit({type:PatientActionsTypes.DELETE_PATIENT,payload:ptient})
  }
}
