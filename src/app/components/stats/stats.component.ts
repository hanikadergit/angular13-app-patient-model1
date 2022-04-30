import { Component, OnInit } from '@angular/core';
import { EventDrivenService } from 'src/app/services/event.driven.service';
import { ActionEvent, PatientActionsTypes } from 'src/app/state/patient.state';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  counter: number=0;
  constructor(private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceEventSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
     if (actionEvent.type==PatientActionsTypes.NEW_PATIENT){
      ++this.counter;
     } 
    })
  }

}
