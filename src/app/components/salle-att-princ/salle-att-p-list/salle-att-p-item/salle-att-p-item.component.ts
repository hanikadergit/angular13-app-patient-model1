import { Component, Input, OnInit } from '@angular/core';
import { Patient } from 'src/app/model/patient.model';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { PatientActionsTypes } from 'src/app/state/patient.state';

@Component({
  selector: 'app-salle-att-p-item',
  templateUrl: './salle-att-p-item.component.html',
  styleUrls: ['./salle-att-p-item.component.css']
})
export class SalleAttPItemComponent implements OnInit {
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
