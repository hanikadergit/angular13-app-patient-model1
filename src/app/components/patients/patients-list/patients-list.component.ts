import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient.model';
import { ActionEvent, AppDataState, DataStateEnum, PatientActionsTypes } from 'src/app/state/patient.state';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {
  @Input() patientsInput$:Observable<AppDataState<Patient[]>>|null=null;
  @Output() patientEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  readonly DataStateEnum = DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(p:Patient){
    this.patientEventEmitter.emit({type:PatientActionsTypes.EDIT_PATIENT,payload:p});
  }
  onEdite(p:Patient){
    this.patientEventEmitter.emit({type:PatientActionsTypes.EDIT_PATIENT,payload:p});
  }
  onActionEvent($event:ActionEvent){
    this.patientEventEmitter.emit($event);
  }
}
