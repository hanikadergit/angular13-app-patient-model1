export enum PatientActionsTypes{
    GET_ALL_PATIENTS="[Patient] Get ALL Patients",
    GET_PATIENTS_SALLE_ATTENT="[Patient] Get Patients Salle Attente",
    GET_PATIENTS_ATT_MED="[Patient] Get Patients Attent Med",
    GET_PATIENTS_ATT_SOIN="[Patient] Get Patients Attent Soin",
    SEARCH_PATIENTS="[Patient] Search  Patients",
    NEW_PATIENT="[Patient] New  Patient",
    EDIT_PATIENT="[Patient] Edit  Patient",
    DELETE_PATIENT="[Patient] Delete  Patient",    
    PATIENT_ADDED="[Patient]  Patient Added",
    PATIENT_UPDATED="[Patient]  Patient Updated",
    EXAM_PATIENT="[Patient]  Examin Patient",
    ABSENT_PATIENT="[Patient]  Patient Absent",
    GET_ALL_PATIENTS_SA="[Patient]  ALL Patient Salle attente"
}
export interface ActionEvent{
    type:PatientActionsTypes,
    payload?:any
}
export enum DataStateEnum {
    LOADING,
    LOADED,
    ERROR
}
export interface AppDataState<T>{
    dataState?:DataStateEnum,
    data?:T,
    ErrorMessage?:string
}