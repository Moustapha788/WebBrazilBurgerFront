import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from 'src/models/Commande';

@Pipe({
  name: 'filtrerZone'
})
export class FiltrerZonePipe implements PipeTransform {



  transform(value: Commande[], idZone: number): Commande[] {
    let tab: Commande[] = []


    value.forEach((commande: Commande) => {
      if (commande.zone.id == idZone) {
        tab.push(commande);
      }
    })

    return tab;
  }


}
