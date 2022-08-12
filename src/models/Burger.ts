import { Image } from "./Image";

export interface Burger {
    id: number,
    nom: string,
    images: Image[],
    prix: number,
    quantite:number;
    choosen:boolean;    
}