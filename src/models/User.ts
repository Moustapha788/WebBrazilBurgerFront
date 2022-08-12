import { Commande } from "./Commande";

export interface Gestionnaire {
    id: number;
    nom: string;
    prenom: string;
    email: string;
}

export interface Client {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    adresse:string;
    doneAnOrderer:boolean;
    phoneNumber:string;
    commandes:Commande[];
}


export interface Livreur {
    id: number;
    nom: string;
    prenom: string;
    email: string;
    adresse:string;
    isDisponible:boolean;
    doneAnOrderer:boolean;
    matriculeMoto:string;
    phoneNumber:string;
    commandes:Commande[];
    etat:number
}
