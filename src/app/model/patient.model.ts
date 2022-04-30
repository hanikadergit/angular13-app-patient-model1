export interface Patient {
    id:number;
    nom : string;
    prenom : string;
    sexe : CharacterData;
    age:number;
    tour:number;
    servi:boolean;
    absent:boolean;
}