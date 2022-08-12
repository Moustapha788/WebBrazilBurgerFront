import { Image } from "./Image"
import { Taille } from "./Taille"

export interface Boisson{
    id:number,
    nom:string,
    images:Image[]
    prix:number,
    quantite:number;
    quantiteStock:number;
    choosen:boolean;

    
}
export interface SousBoisson{
    boisson:Boisson;
    id:number,
    prix:number,
    quantiteStock:number;

    
}
