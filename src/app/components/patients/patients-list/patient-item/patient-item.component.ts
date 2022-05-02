import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';
import { PatientActionsTypes } from 'src/app/state/patient.state';
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
  onEdite(patient:Patient){
    //this.eventEmitter.emit({type:PatientActionsTypes.EDIT_PATIENT,payload:ptient});
    this.eventDrivrenService.publishEvent({type:PatientActionsTypes.EDIT_PATIENT,payload:patient});
  }
  onDelete(patient:Patient){
    //this.eventEmitter.emit({type:PatientActionsTypes.DELETE_PATIENT,payload:ptient})
    this.eventDrivrenService.publishEvent({type:PatientActionsTypes.DELETE_PATIENT,payload:patient});
  }
  onServiPatient(patient:Patient){
    //this.eventEmitter.emit({type:PatientActionsTypes.DELETE_PATIENT,payload:ptient})
    this.eventDrivrenService.publishEvent({type:PatientActionsTypes.EXAM_PATIENT,payload:patient});
  }
  onAbsentPatient(patient:Patient){
    //this.eventEmitter.emit({type:PatientActionsTypes.DELETE_PATIENT,payload:ptient})
    this.eventDrivrenService.publishEvent({type:PatientActionsTypes.ABSENT_PATIENT,payload:patient});
  }
}
