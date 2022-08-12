import { Quartier } from "./Quartier";


export interface Zone {
    id: number;
    nom: string;
    fraisLivraison: number;
    quartiers: Quartier[];
}

