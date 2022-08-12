import { Boisson, SousBoisson } from "./Boisson";
import { Burger } from "./Burger";
import { Frite } from "./Frite";


export interface BurgerMenu {
    burger: Burger;
    prix: number;
    quantite: number;
}
export interface FriteMenu {
    frite: Frite;
    prix: number;
    quantite: number;
}
export interface BoissonMenu {
    quantite: number;
    drinkSize: DrinkSize;
}
export interface DrinkSize {
    id: number;
    boissons: SousBoisson[];
    modele: string
}