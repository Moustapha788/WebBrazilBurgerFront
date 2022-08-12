import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SousBoisson } from 'src/models/Boisson';
import { DetailDrink } from 'src/models/Menu';
import { BoissonMenu } from 'src/models/SubProduct';

@Injectable({
  providedIn: 'root'
})

export class MenuService {







  constructor() {

  }
  
  tabChoses: DetailDrink[] = [];
  /* 
  cette fonction permet de récupérer les boissons et  de remplir tabchoses
  */
  recupeBoisson(boissonMenu: BoissonMenu[]) {
    boissonMenu.forEach((elt: BoissonMenu) => {
      this.tabChoses.push({
        boisson: elt.drinkSize.boissons,
        qteTotal: elt.quantite,
        qteChoisis: 0,
      });
    })
    // console.log(this.tabChoses);
  }

  isQteNormal(detailDrink: DetailDrink): boolean {
    if ((detailDrink.qteTotal <= detailDrink.qteChoisis ) && detailDrink.qteChoisis!=0) {
      return true;
    } else {
      return false;
    }
  }

  activeButton(): boolean {
    let reponse: boolean = true;
    this.tabChoses.forEach((obj: DetailDrink) => {
      reponse &&= this.isQteNormal(obj)
    })
    return reponse;
  }






}
