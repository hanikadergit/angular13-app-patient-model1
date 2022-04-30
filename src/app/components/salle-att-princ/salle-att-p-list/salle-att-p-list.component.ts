import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from 'src/app/model/patient.model';
import { AppDataState, DataStateEnum } from 'src/app/state/patient.state';

@Component({
  selector: 'app-salle-att-p-list',
  templateUrl: './salle-att-p-list.component.html',
  styleUrls: ['./salle-att-p-list.component.css']
})
export class SalleAttPListComponent implements OnInit {
  @Input() patientsInput$:Observable<AppDataState<Patient[]>>|null=null;
 // @Output() patientEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  readonly DataStateEnum = DataStateEnum;
  constructor() { }

  ngOnInit(): void {
  }

}
