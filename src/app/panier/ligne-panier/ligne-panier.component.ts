import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PanierService } from 'src/app/services/panier/panier.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Burger } from 'src/models/Burger';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-ligne-panier',
  templateUrl: './ligne-panier.component.html',
  styleUrls: ['./ligne-panier.component.css']
})
export class LignePanierComponent implements OnInit {

  qte: number = 1;

  constructor(private panierService: PanierService,private transformationService: TransformationService) { }
  @Input() ligne!: Burger | Menu;
  
  ngOnInit(): void {
  }

  moins(produit: Menu | Burger, inputQte: any) {
    if (inputQte.value <= 1) {
      inputQte.value = 1
      return;
    }
    inputQte.value = --inputQte.value;
    this.panierService.changeQuantite(produit, inputQte.value)
    
    // console.log(inputQte.value);
  }

  plus(produit: Menu | Burger, inputQte: any) {


    if (inputQte.value > 10) {
      inputQte.value = 10;
      return;
    }
    inputQte.value = ++inputQte.value;
    this.panierService.changeQuantite(produit, inputQte.value);
    
    // console.log(inputQte.value);
  }

  removeProduct(product: any) {
    // this.bcgFooter=(this.disabled)? "bcg-red": "bcg-default ";

    this.panierService.puttingToPanier(product, "off");
    // this.disabled = !this.disabled;

  }
  
  changerPrix(produit: Menu | Burger, value: any/*number |string */) {
    this.panierService.changeQuantite(produit, value)
  }
  getPrixCommande(){
    this.panierService.calculerPrixTotal();
  }

  afficheImage(img_url: string){
    return this.transformationService.transform(img_url);
  }
 
}
