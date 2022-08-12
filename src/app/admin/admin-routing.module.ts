import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { CommandesComponent } from '../admin/commandes/commandes.component';
import { CommandesComponent } from './commandes/commandes.component';
import { ShowCommandeComponent } from './commandes/show-commande/show-commande.component';
import { ShowZoneComponent } from './commandes/show-zone/show-zone.component';
import { DeliveryListComponent } from './livraisons/delivery-list/delivery-list.component';
import { DetailLivraisonComponent } from './livraisons/detail-livraison/detail-livraison.component';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { DetailProduitComponent } from './produits/detail-produit/detail-produit.component';
import { NewComponent } from './produits/new/new.component';
import { ProduitsComponent } from './produits/produits.component';



const routesAdmin: Routes = [

  {
    path: "",
    component: CommandesComponent
  },
  {
    path: "commandes",
    children: [
      { path: '', component: CommandesComponent, },
      { path: ':id', component: ShowCommandeComponent, },
      // { path: ':id', component: ShowCommandeComponent, },
      { path: 'zones/:id', component: ShowZoneComponent },
    ]
  },

  {
    path: "livraisons",
    children: [
      { path: "new", component: LivraisonsComponent },
      {
        path: "livreurs",
        children: [
          { path: ":id", component: LivreurComponent },
          { path: "", component: LivreurComponent },

        ]
      },
      { path: ":id", component: DetailLivraisonComponent },
      { path: "", component: DeliveryListComponent },

    ]
  },
  {
    path: "produits",
    children: [
      { path: "", component: ProduitsComponent },
      { path: "new", component: NewComponent },
      { path: ":id", component: DetailProduitComponent },
    ]
  },

];



@NgModule({
  imports: [
    RouterModule.forChild(routesAdmin)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
