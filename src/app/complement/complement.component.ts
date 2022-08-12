import { Component, Input, OnInit } from '@angular/core';
import { Frite } from 'src/models/Frite';
import { BoissonComplement, ITaille } from 'src/models/IComplement';
import { PanierService } from '../services/panier/panier.service';
import { TransformationService } from '../services/transformation/transformation.service';

@Component({
  selector: 'app-complement',
  templateUrl: './complement.component.html',
  styleUrls: ['./complement.component.css']
})
export class ComplementComponent implements OnInit {





  @Input() complement!: Frite | BoissonComplement;
  taille!:ITaille;
  constructor(private panierService: PanierService, private transformationService: TransformationService) { }

  ngOnInit(): void {

    if(this.isBoisson(this.complement)){
      
    }
  }


  moins(produit: Frite | BoissonComplement, inputQte: any) {
    if (inputQte.value == 0) {
      this.panierService.puttingToPanier(produit,"off")
      return;
    }
    if (inputQte.value <= 1) {
      inputQte.value = 0
      return;
    }
    inputQte.value = --inputQte.value;
  
    this.panierService.changeQuantite(produit, inputQte.value)

    // console.log(inputQte.value);
  }

  plus(produit: Frite | BoissonComplement, inputQte: any) {

    this.panierService.puttingToPanier(produit)

    if (inputQte.value > 10) {
      inputQte.value = 10;
      return;
    }
    inputQte.value = ++inputQte.value;
    // this.panierService.changeQuantite(produit, inputQte.value);

    // console.log(inputQte.value);
  }


  changerPrix(produit: BoissonComplement | Frite, value: any/*number |string */) {
    // this.panierService.changeQuantite(produit, value)
  }
  getPrixCommande() {
    this.panierService.calculerPrixTotal();
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }

  isBoisson(complement: any) {
    return complement.tailleStock ? true : false
  }

}
