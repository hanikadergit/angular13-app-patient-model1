import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';
import { ActionEvent, PatientActionsTypes } from 'src/app/state/patient.state';
import { PatientsService } from 'src/app/services/patients.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { EventDrivenService } from 'src/app/services/event.driven.service';

@Component({
  selector: 'app-patient-item',
  templateUrl: './patient-item.component.html',
  styleUrls: ['./patient-item.component.css']
})
export class PatientItemComponent implements OnInit {
  @Input() patient:Patient|null=null;
  //@Output() eventEmitter: EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor(private eventDrivrenService:EventDrivenService) { }

  ngOnInit(): void {
  }
  onEdite(ptient:Patient){
    //this.eventEmitter.emit({type:PatientActionsTypes.EDIT_PATIENT,payload:ptient});
    this.eventDrivrenService.publishEvent({type:PatientActionsTypes.EDIT_PATIENT,payload:ptient});
  }
  onDelete(ptient:Patient){
    //this.eventEmitter.emit({type:PatientActionsTypes.DELETE_PATIENT,payload:ptient})
    this.eventDrivrenService.publishEvent({type:PatientActionsTypes.DELETE_PATIENT,payload:ptient});
  }
}
