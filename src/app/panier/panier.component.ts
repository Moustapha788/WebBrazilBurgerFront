import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { FormatCommande, PostCommande } from 'src/models/Commande';
import { Frite } from 'src/models/Frite';
import { BoissonComplement, IComplement } from 'src/models/IComplement';
import { Produit } from 'src/models/Produit';
import { Zone } from 'src/models/Zone';
import { DataService } from '../services/data/data.service';
import { PanierService } from '../services/panier/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  items$: Observable<any> = this.panierService.items$
  priceWithoutDelivering: number = 12000;
  deliveryPrice: number = 0;
  zones!: Zone[]


  /* complements */

  tabFritesComplement:Frite[]=[]
  tabBoissonsComplement:BoissonComplement[]=[]


  constructor(private panierService: PanierService, private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.dataService.getZones().subscribe((data: any) => {
      this.zones = data;
    });



    this.dataService.getAllComplements().pipe(
      take(1),
      map((iComplement: IComplement) => {

        this.tabFritesComplement = iComplement.frites
        this.tabBoissonsComplement = iComplement.boissons
        console.log(this.tabFritesComplement);
        console.log(this.tabBoissonsComplement);

      })
    ).subscribe()

  }



  /* 
  nota bene: fonction
  */
  getPrixCommande() {
    this.priceWithoutDelivering = this.panierService.calculerPrixTotal()
    return this.priceWithoutDelivering;
  }

  isZoneSelected(selection: HTMLSelectElement): boolean {
    if (!selection.value) {
      return false;
    }
    if (+selection.value >= 1 && +selection.value <= this.zones.length) {
      console.log(selection.value);
      return true;
    }
    return false;
  }
  estAEmporter(emporter: HTMLInputElement): boolean {
    if (emporter.checked) {
      return true
    }
    return false;

  }
  estALivrer(livrable: HTMLInputElement): boolean {
    if (livrable.checked) {
      return true
    }
    return false;

  }

  checkedLivrable(livrable: HTMLInputElement): string {
    if (this.estALivrer(livrable)) {
      return "block";
    }
    return "none";

  }



  idZoneSelectionne(selection: HTMLSelectElement) {
    // console.log(+selection.value);

    return +selection.value;
  }

  deliveryModeIschecked(emporter: HTMLInputElement, selection: HTMLSelectElement) {
    if (this.estAEmporter(emporter)) {
      return true;
    } else if (this.isZoneSelected(selection)) {
      return true;
    }
    return false;
  }

  nePeutCommander(emporter: HTMLInputElement, selection: HTMLSelectElement) {
    if (this.deliveryModeIschecked(emporter, selection) && this.getPrixCommande() > 0) {
      return false;
    }
    return true;
  }
  rechercheZone(idZone: number): Zone {
    let zone: Zone = this.zones[0];
    this.zones.forEach((z: any) => {
      if (z.id == idZone) {
        // console.log(z);
        zone = z;
        return;
      }
    })
    return zone;
  }
  getDeliveryPrice(livrable: HTMLInputElement, selection: HTMLSelectElement): number {
    if (this.isZoneSelected(selection)) {
      let zone: Zone = this.rechercheZone(this.idZoneSelectionne(selection))
      // console.log(zone);
      return zone.fraisLivraison;
    }
    return 0;
  }


  getPanier(): Produit[] {
    return this.panierService.getPanier();
  }

  preparerCommande(panier: Produit[]): FormatCommande[] {
    const produits: FormatCommande[] = []
    panier.forEach((elt: Produit) => {
      produits.push(
        {
          quantite: +elt.quantite,
          produit: "/api/produits/" + elt.id

        }
      )
    });
    return produits;
  }
    /* 
  nota bene: la commande sans zone ou avec zone
  */
  commander(idZone: number, selection: HTMLSelectElement) {
    const commandes: FormatCommande[] = this.preparerCommande(this.getPanier())
    let body!: PostCommande | { Produits: FormatCommande[] };
    if (!this.isZoneSelected(selection)) {
      body = {
        "Produits": commandes,
      }
    } else {
      body = {
        "Produits": commandes,
        "zone": "/api/zones/" + idZone
      }
    }

    // console.log(body);
    this.dataService.postCommande(body)
    this.panierService.cleanBasket();
    this.router.navigateByUrl("clients/23");
  }
}


