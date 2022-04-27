import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment, Myenvironment } from "src/environments/environment";
import { Patient } from "../model/patient.model";
@Injectable({providedIn:"root"})
export class PatientsService{
    constructor(private http:HttpClient){
    }

    getAllPatients():Observable<Patient[]>{
        let host = Myenvironment.host;
        return this.http.get<Patient[]>(host+"/patients");
    }
    getPatientsSalleAttente(){
        let host = Myenvironment.host;
        return this.http.get<Patient[]>(host+"/patients?enSalleAttente=true");        
    }
    getPatientsAttenteMedecin():Observable<Patient[]>{
        let host = Myenvironment.host;
        return this.http.get<Patient[]>(host+"/patients?enFileAttenteMed=true");
    }
    getPatientsAttenteSoin():Observable<Patient[]>{ 
        let host = Myenvironment.host;
        return this.http.get<Patient[]>(host+"/patients?enFileAttenteSoin=true");
    }
    getPatientsEnConsultation():Observable<Patient[]>{
        let host = Myenvironment.host;
        return this.http.get<Patient[]>(host+"/patients?enFileAttenteMed=true");
    }
    searchPatients(keyword:string):Observable<Patient[]>{
        let host = Myenvironment.host;
        return this.http.get<Patient[]>(host+"/patients?nom_like="+keyword);
    }
    deletePatient(patient:Patient):Observable<void>{
        let host = Myenvironment.host;
        return this.http.delete<void>(host+"/patients/"+patient.id);
    }
    savePatient(patient:Patient):Observable<Patient>{ 
        let host = Myenvironment.host;
        return this.http.post<Patient>(host+"/patients",patient);
    }
    getPatient(id:number):Observable<Patient>{
        let host = Myenvironment.host;
        return this.http.get<Patient>(host+"/patients/"+id);
    }
    updatePatient(patient:Patient):Observable<Patient>{
        let host = Myenvironment.host;
        return this.http.put<Patient>(host+"/patients/"+patient.id,patient);
    } 
}