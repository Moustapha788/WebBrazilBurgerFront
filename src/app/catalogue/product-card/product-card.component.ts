import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PanierComponent } from 'src/app/panier/panier.component';
import { PanierService } from 'src/app/services/panier/panier.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Burger } from 'src/models/Burger';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input()
  produit!: Burger | Menu;
  // disabled: boolean = true;




  items$: Observable<any> = this.panierService.items$
  constructor(private router: Router, private panierService: PanierService, private transformationService: TransformationService) { }


  ngOnInit(): void {



  }

  show(): any {

    this.router.navigateByUrl(`produit/${this.produit.id}`);

  }
  basketPutting(product: any) {

    // let action: "off" | "on" = this.disabled ? "on" : "off";
    // this.bcgFooter(product);

    // this.panierService.puttingToPanier(product, action);
    // this.disabled = !this.disabled;
    // this.panierService.getPrixProd(product);



    this.panierService.puttingToPanier(product);

    // product.disabled = false;
    product.disabled = !product.disabled;
    // this.bcgFooter = product.disabled?"bcg-default":"bcg-change";

    this.bcgFooter(product);


  }




  isMenu(product:any) {

    return product.burgers ? true : false;
   
    // if (product.nom.substr(0, 1) === ('B' || 'b')) {
    //   return true;
    // } else {
    //   return false;

    // }
  }

  bcgFooter(product: Menu | Burger): string {
    this.panierService.changerComportement(product);
    return this.showButton(product) ? "bcg-default" : "bcg-change";
  }
  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }
  showButton(prodcut: any) {
    this.produit.choosen=true;
    return  this.produit.choosen;
    
  }
  saveState(){

  }
  

}
