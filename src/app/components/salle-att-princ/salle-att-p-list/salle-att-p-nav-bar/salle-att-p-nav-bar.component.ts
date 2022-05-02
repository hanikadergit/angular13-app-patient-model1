import { Component, OnInit } from '@angular/core';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { PatientActionsTypes } from 'src/app/state/patient.state';

@Component({
  selector: 'app-salle-att-p-nav-bar',
  templateUrl: './salle-att-p-nav-bar.component.html',
  styleUrls: ['./salle-att-p-nav-bar.component.css']
})
export class SalleAttPNavBarComponent implements OnInit {
  

  constructor(private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
  }
  onGetAllPatients(){ 
    this.eventDrivenService.publishEvent({type:PatientActionsTypes.GET_ALL_PATIENTS});
   }
  onGetPatientsSalleAttente(){ 
    this.eventDrivenService.publishEvent({type:PatientActionsTypes.GET_PATIENTS_SALLE_ATTENT});
   }
  onNewPatient(){
    //this.patientEnventEmitter.emit({type:PatientActionsTypes.NEW_PATIENT} );
    this.eventDrivenService.publishEvent({type:PatientActionsTypes.NEW_PATIENT});
  }
  onSearch(dataForm:any){
    //this.patientEnventEmitter.emit({type:PatientActionsTypes.SEARCH_PATIENTS,payload:dataForm} );
    this.eventDrivenService.publishEvent({type:PatientActionsTypes.SEARCH_PATIENTS,payload:dataForm});
  }

}
