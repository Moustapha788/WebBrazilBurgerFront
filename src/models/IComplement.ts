import { SousBoisson } from "./Boisson";
import { Frite } from "./Frite";
import { Image } from "./Image";

export interface IComplement {
    frites: Frite[];
    boissons: BoissonComplement[];

}

export interface BoissonComplement {
    id: number;
    nom: string;
    prix: number;
    images: Image[];
    tailleStock: ITaille[];
    quantite:number;
}

export interface ITaille {
    id: number;
    quantiteStock: number;
    prix: BoissonComplement
}

