import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { MenuService } from 'src/app/services/menu/menu.service';
import { PanierService } from 'src/app/services/panier/panier.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Boisson } from 'src/models/Boisson';
import { Burger } from 'src/models/Burger';
import { Frite } from 'src/models/Frite';
import { ICatalogue } from 'src/models/ICatalogue';
import { BoissonComplement, IComplement } from 'src/models/IComplement';
import { Menu } from 'src/models/Menu';
import { Produit } from 'src/models/Produit';
import { BoissonMenu, BurgerMenu, FriteMenu } from 'src/models/SubProduct';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ShowProductComponent implements OnInit {
  produit!: Menu | Burger;
  similarProduct!: Menu | Burger
  id: number = +this.activeRouter.snapshot.params["id"];

  burgersDuMenu: BurgerMenu[] = [];
  fritesDuMenu: FriteMenu[] = [];
  boissonsDuMenu: BoissonMenu[] = [];
  /* similar products */
  burgersSimilaires: Produit[] = [];
  menusSimilaires: Produit[] = [];

  /* complements */

  tabFritesComplement: Frite[] = []
  tabBoissonsComplement: BoissonComplement[] = []





  constructor(private activeRouter: ActivatedRoute,
    private dataService: DataService,
    private transformationService: TransformationService,
    private panierService: PanierService,
    private routerExterne: Router,
    private menuService: MenuService) {

  }
  ngOnInit(): void {

  this.dataService.getProduits().pipe(
      take(1),
      map((iCata: ICatalogue) => {
        // console.log(iCata);
        iCata.burgers.forEach((product: Burger) => {
          if (this.id == product.id) {
            this.produit = product;
            // console.log("le Burger en question : ", product);
            this.dataService.getProduits().
              pipe(take(1), map((iCata: any) => {
                iCata.burgers.forEach((produit: Burger) => {
                  if (produit.id != this.id) {
                    this.burgersSimilaires.push(produit);
                  }
                });
              })).subscribe();
            return;
          }
        });
        iCata.menus.forEach((product: Menu) => {
          if (this.id == product.id) {
            this.produit = product;
            this.burgersDuMenu = product.burgers;
            this.fritesDuMenu = product.frites;
            this.boissonsDuMenu = product.tailles
            this.menuService.recupeBoisson(this.boissonsDuMenu);
            // console.log("le Menu en question : ", product);
            // console.log("les burgers de ce menu : ",this.burgersDuMenu);
            // console.log("les boissons de ce menu : ", this.boissonsDuMenu);
            this.dataService.getProduits().
              pipe(take(1), map((iCata: any) => {
                iCata.menus.forEach((produit: Menu) => {
                  if (produit.id != this.id) {
                    this.menusSimilaires.push(produit);
                  }
                });
              })).subscribe();
            return;
          }
        });
        /* this.produit.choosen == false  */
        // localStorage.setItem('products', JSON.stringify(iCata));
      })
      ).subscribe()

    // console.log("les Burgers similaires  : ", this.burgersSimilaires);
    // console.log("les Menus similaires  : ", this.menusSimilaires);




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
  /* fin ngOnInit */




  /* 
  nota bene: fonctions 
  
  */
  seeToBasket() {
    this.routerExterne.navigateByUrl("panier");
  }
  isAlreadyinBasket(product: Menu | Burger): boolean {
    return this.panierService.isAlreadyInBasket(product);
  }
  validAdd(product: any) {
    return this.isMenu(product) ? false : true;
  }
  showTitle(product: any): string {
    return this.isMenu(product) ? "Détail Menu" : "Détail Burger";
  }
  isMenu(product: any) {
    return product.burgers ? true : false;

  }
  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }
  addToBasket(product: any) {
    if (!this.isMenu(product)) {
      this.panierService.puttingToPanier(product);
    } else {
      this.panierService.puttingToPanier(product);
    }
    this.routerExterne.navigateByUrl("panier");
  }

  desactiveButton() {
    return this.menuService.activeButton();
  }




}
