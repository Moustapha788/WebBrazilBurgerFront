import { Image } from "./Image";

export interface Produit {
    id: number;
    nom: string;
    prix: number;
    images: Image[];
    quantite:number;
    choosen:boolean;

}