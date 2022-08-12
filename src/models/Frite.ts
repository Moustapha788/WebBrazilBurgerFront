import { Image } from "./Image";

export interface Frite {
    id: number,
    nom: string,
    images: Image[],
    prix: number,
    quantite:number;
    choosen:boolean;
    
    
}