import { Injectable } from '@angular/core';
import { map, take } from 'rxjs';
import { Commande, StatutCommande } from 'src/models/Commande';
import { PostLivraison } from 'src/models/Livraison';
import { Zone } from 'src/models/Zone';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveringService {

  zones: Zone[] = [];
  commandeALivrer: Commande[] = []
  idLivreur!: number;
  idZone!: number;
  bodyLivraison!: PostLivraison

  constructor(private dataService: DataService) { }

  getAllZones() {
    this.dataService.getZones().subscribe((zones: any) => {
      // console.log(zones);

      this.zones = zones;
    })
    return this.zones;
  }


  ajouterCommandeALivrer(commande: Commande) {
    this.commandeALivrer.push(commande);
  }

  enleverFromCommandeALivrer(commande: Commande) {
    this.commandeALivrer.splice(this.commandeALivrer.indexOf(commande, 1));
  }

  doesHeCheckAnOrderer(): boolean {
    return (this.commandeALivrer.length > 0 ? true : false);
  }

  livrer(idLivreur: number,idZone:number) {
    this.recupLivreur(idLivreur);
    this.recupZone(idZone);
    // console.log(this.preparerLivraison());

    this.bodyLivraison = {
      "livreur": "/api/livreurs/" + this.idLivreur,
      "zone": "/api/zones/" + this.idZone,
      "commandes": this.preparerLivraison()
    }
    console.log(this.bodyLivraison );
    

    this.dataService.postLivraison(this.bodyLivraison);
  }

  recupLivreur(idLivreur: number) {
    this.idLivreur = idLivreur;
    console.log(this.idLivreur);
  }

  recupZone(idZone: number) {
    this.idZone = idZone;
    console.log(this.idZone);
  }

  preparerLivraison(): { id: number }[] {
    let tabLivraison: { id: number }[] = []
    this.commandeALivrer.forEach(commande => {
      tabLivraison.push({
        id: commande.id
      })
    });
    return tabLivraison;
  }
}
