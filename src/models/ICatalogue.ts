import { Boisson } from "./Boisson";
import { Burger } from "./Burger";
import { Frite } from "./Frite";
import { Menu } from "./Menu";

export interface ICatalogue {
    menus:Menu[];
    burgers:Burger[];
   
}