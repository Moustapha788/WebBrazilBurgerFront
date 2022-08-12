import { Produit } from "./Produit";
import { Client, Gestionnaire } from "./User";
import { Zone } from "./Zone";



export interface FormatCommande {
    quantite: number;
    produit: string;/* "api/produits/:id" */
}

export interface ProduitCmde {
    id: number;
    quantite: number;
    produit: Produit;
}

export interface Commande {

    id: number;
    registrationDate: Date;
    statut: string;
    gestionnaire: Gestionnaire;/* null jusqu'à la valiation */
    Produits: ProduitCmde[]
    client: Client;
    prixTotal: number;
    zone: Zone;
}

export enum StatutCommande {
    enAttente = "enAttente",
    valide = "valide",
    enCoursDeTraitement = "enCoursDeTraitement",
    traite = "traite",
    enCoursDeLivraison = "enCoursDeLivraison",
    annule = "annule",
    livre = "livre",
    termine = "termine",
    modifie = "modifie",
    archiver = "archiver"
}

export interface PostCommande {
    Produits: FormatCommande[];
    zone: string;
}
export interface UpdateCommande {
    statut: string,
    Produits: FormatCommande[];
    zone: string;
}
