import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, take } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { DeliveringService } from 'src/app/services/delivering/delivering.service';
import { Commande, StatutCommande } from 'src/models/Commande';
import { Livreur } from 'src/models/User';
import { Zone } from 'src/models/Zone';

@Component({
  selector: 'app-livraisons',
  templateUrl: './livraisons.component.html',
  styleUrls: ['./livraisons.component.css']
})
export class LivraisonsComponent implements OnInit {

  tousLesCommandes: Commande[] = [];
  commandesTermines: Commande[] = [];

  tousLesZones: Zone[] = [];
  zonesTermines: Zone[] = [];

  tousLesLivreurs: Livreur[] = [];
  livreursDisponibles: Livreur[] = [];

  idZoneALivrer: number[] = [];
  selectZone!: number;


  constructor(private dataService: DataService, private livraisonService: DeliveringService,private router:Router) { }

  ngOnInit(): void {
    // this.selectZone="Zone A";

    this.dataService.getAllcommandes().pipe(
      take(1),
      map((Commandes: any) => {
        // console.log(Commandes);
        Commandes.filter((commande: Commande) => {
          if (commande.statut == StatutCommande.traite && commande.zone) {
            this.commandesTermines.push(commande);
          }
        })
        // console.log(this.commandesTermines);
      })
    ).subscribe()

    this.dataService.getZones().subscribe((zones: any) => {
      this.tousLesZones = zones
      
      // this.tousLesZones.forEach((zone:Zone)=>{
      //   if(this.isReadyAllCommandesOfZones())
      // })
      this.zonesTermines = this.tousLesZones;
      // console.log(this.zonesTermines);
    })




    this.dataService.getAllLivreurs().subscribe((livreurs: any) => {
      this.tousLesLivreurs = livreurs;

      this.tousLesLivreurs.forEach((livreur: Livreur) => {
        if (livreur.isDisponible && livreur.etat == 1) {
          this.livreursDisponibles.push(livreur);
        }
      });
      console.log("Tous les livreurs ", this.tousLesLivreurs);
      console.log("livreurs disponibles ", this.livreursDisponibles);
    })






  }


  isReadyAllCommandesOfZones(zone:Zone): any {
    let tabCommandes: Commande[]=[]
    for (let i = 0; i < tabCommandes.length; i++) {
      if (tabCommandes[i].statut != StatutCommande.traite) {
        return false;
      }
    }
    return true;
  }

  nombreCommandesD1Zone(zone: Zone) {
    let i = 0;
    this.commandesTermines.forEach((commande: Commande) => {
      if (commande.zone.id == zone.id) {
        i++
      }
    })
    return i;
  }

  livrerCommande(selectLivreur: HTMLSelectElement) {
    // alert("Serigne Rawane Mou selmi");
    this.livraisonService.livrer(this.idLivreurSelectionne(selectLivreur), this.selectZone);
    location.reload();
    // this.router.navigate("")
    
  }

  idLivreurSelectionne(selectLivreur: HTMLSelectElement): any {
    if (selectLivreur.value) {
      return +selectLivreur.value;
    }
  }
  doesHeCheckAnOrderer() {
    return this.livraisonService.doesHeCheckAnOrderer();
  }
  OnDeSelection() {
    // console.log(this.selectZone);

    this.livraisonService.commandeALivrer = [];
  }

  isSelectLivreur(selectLivreur: HTMLSelectElement): boolean {
    if (selectLivreur.value) {
      return true;
    } else {
      return false;
    }
  }

  disableLivrer(selectLivreur: HTMLSelectElement): boolean {

    if (this.isSelectLivreur(selectLivreur)) {
      return false;
    } else {
      return true;
    }
  }

  nombreSelectionne() {
    return this.livraisonService.commandeALivrer.length
  }
}
