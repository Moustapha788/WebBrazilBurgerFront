import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommandesComponent } from './commandes/commandes.component';

import { AdminRoutingModule } from './admin-routing.module';
import { LivraisonsComponent } from './livraisons/livraisons.component';
import { ProduitsComponent } from './produits/produits.component';
import { DashboardComponent } from './commandes/dashboard/dashboard.component';
import { ShowCommandeComponent } from './commandes/show-commande/show-commande.component';
import { DetailLivraisonComponent } from './livraisons/detail-livraison/detail-livraison.component';
import { NewComponent } from './produits/new/new.component';
import { LivreurComponent } from './livraisons/livreur/livreur.component';
import { DetailProduitComponent } from './produits/detail-produit/detail-produit.component';
import { ShowZoneComponent } from './commandes/show-zone/show-zone.component';
import { RowCommandeComponent } from './commandes/row-commande/row-commande.component';
import { StatutCmdUpComponent } from './commandes/show-commande/statut-cmd-up/statut-cmd-up.component';
import { StatutCmdDownComponent } from './commandes/show-commande/statut-cmd-down/statut-cmd-down.component';
import { RowDeliveringComponent } from './livraisons/row-delivering/row-delivering.component';
import { FormsModule } from '@angular/forms';
import { FiltrerZonePipe } from './filtrer-zone/filtrer-zone.pipe';
import { DeliveryListComponent } from './livraisons/delivery-list/delivery-list.component';
import { DetailLivreurComponent } from './livraisons/livreur/detail-livreur/detail-livreur.component';



@NgModule({
  declarations: [
    CommandesComponent,
    LivraisonsComponent,
    ProduitsComponent,
    DashboardComponent,
    ShowCommandeComponent,
    DetailLivraisonComponent,
    NewComponent,
    LivreurComponent,
    DetailProduitComponent,
    ShowZoneComponent,
    RowCommandeComponent,
    StatutCmdUpComponent,
    StatutCmdDownComponent,
    RowDeliveringComponent,
    FiltrerZonePipe,
    DeliveryListComponent,
    DetailLivreurComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
  // exports: [
  
  // ]
})
export class AdminModule { }
