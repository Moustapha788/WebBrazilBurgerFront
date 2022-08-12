import { Injectable } from '@angular/core';
import { BehaviorSubject, map, take } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { Commande, StatutCommande } from 'src/models/Commande';
import { Frite } from 'src/models/Frite';
import { BoissonComplement } from 'src/models/IComplement';
import { Menu } from 'src/models/Menu';
import { Produit } from 'src/models/Produit';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  prixCommandes: number = 0;
  prixUniQte: number = 0;

 
  constructor() {
    let existingCartItems = JSON.parse(localStorage.getItem('products') || '[]');
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
    // this.items$.subscribe(console.log)

  }

  private itemsSubject = new BehaviorSubject<Burger[] | Menu[]>([]);
  items$ = this.itemsSubject.asObservable();


  /*
  nota bene:
  fonction pour ajouter et retir un produit sans quitter la catalogue
   */
  // puttingToPanier(product: Menu & Burger, action: "on" | "off" = "on") {
  //   this.items$.pipe(
  //     take(1),
  //         product.quantite=1;

  //     map((products) => {
  //       if (action === "on") {
  //         products.push(product);
  //       } else {
  //         products.splice(products.indexOf(product), 1)
  //       }
  //       // next:products.next(products);
  //       localStorage.setItem('products', JSON.stringify(products));
  //     }),
  //   ).subscribe();
  //console.log(this.isVide)
  // }


  puttingToPanier(product: any /* Menu & Burger & (Frite | BoissonComplement )*/, action: "on" | "off" = "on") {
    this.items$.pipe(
      take(1),
      map((products) => {
        let tab: Menu[] | Burger[] = JSON.parse(localStorage.getItem('products') || '[]');
        //console.log(tab);
        product.quantite = 1;
        product.choosen = true;


        if (action === "on") {
          if (tab) {
            let prodTrouve: Burger | Menu | undefined = tab.find((param: { id: number }) => param.id == product.id)

            // console.log(prodTrouve?.id);
            if (!prodTrouve) {
              products.push(product);

            } else {
              products.forEach(elt => {
                if (elt.id == product.id) {
                  elt.quantite++;
                  product.choosen = false;

                }
              });
            }
          }
        }
        else {
          products.splice(products.indexOf(product), 1);
          product.choosen = false;
        }
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }



  cleanBasket() {
    // this.items$.pipe(
    //   take(1),
    //   map((products: any) => {
    //     products.forEach((elt: Menu | Burger) => {
    //       products.splice(products.indexOf(elt), 1);
    //     });

    //   })).subscribe();


    localStorage.removeItem('products');
    location.reload();


  }

  changerComportement(product: Menu | Burger | Frite | BoissonComplement) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach(elt => {
          if (elt.id == product.id) {
            // elt.disabled = !elt.disabled;
            elt.choosen = false;
          }
        });
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();

  }

  changeQuantite(product: Menu | Burger | Frite | BoissonComplement, qte: any/* number */) {
    this.items$.pipe(
      take(1),
      map((products) => {
        products.forEach(elt => {
          if (elt.id == product.id) {
            elt.quantite = qte;
          }
        });
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();

  }
  calculerPrixTotal() {
    let prixTotal = 0;
    this.items$.subscribe(

      (products) => {
        products.forEach((elt) => {
          prixTotal += elt.prix * elt.quantite;
        });
        localStorage.setItem('products', JSON.stringify(products));
      }

    );
    return prixTotal;

  }

  isAlreadyInBasket(product: Menu | Burger): boolean {
    let tab: Menu[] | Burger[] = JSON.parse(localStorage.getItem('products') || '[]');
    // console.log(tab);
    if (tab) {
      let prodTrouve: Burger | Menu | undefined = tab.find((param: { id: number }) => param.id == product.id)
      // console.log(prodTrouve?.id); 
      if (prodTrouve) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }
  getPanier(): Produit[] {
    const panier: Produit[] = JSON.parse(localStorage.getItem('products') || '[]');
    // console.log(panier);
    return panier

  }



  stringToDate(str: string) {
    return new Date(str);
  }

}
