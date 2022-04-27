export interface Patient {
    id:number;
    nom : string;
    prenom : string;
    sexe : CharacterData;
    dateNaissance:Date;
    age:number;
    mobile: string;
    datePresence:Date;
    tourSalle:number;
    tourAttMed:number;
    tourAttSoin:number;
    enSalleAttente:boolean;
    enFileAttenteSoin:boolean;
    enFileAttenteMed:boolean;
}