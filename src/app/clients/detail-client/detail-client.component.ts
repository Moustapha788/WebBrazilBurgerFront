import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { DataService } from 'src/app/services/data/data.service';
import { PanierService } from 'src/app/services/panier/panier.service';
import {  Commande, StatutCommande, UpdateCommande } from 'src/models/Commande';
import { Client } from 'src/models/User';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.component.html',
  styleUrls: ['./detail-client.component.css']
})
export class DetailClientComponent implements OnInit {


  client!: Client;
  id: number = +this.activeRouter.snapshot.params["id"];
  notification: boolean = false;

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService,private commandeService:CommandeService) { }

  ngOnInit(): void {
    this.dataService.getOneClient(this.id).subscribe((data: any) => {
      console.log(data);
      this.client = data
      // console.log(this.client);
    });
  }

  /* 
  nota bene: dans le  bouton annuler la commande
   */
  annuler(commande: Commande) {
    this.dataService.updateCommande(commande.id,StatutCommande.annule);
    this.notification = !this.notification;
  }

  /*  
   nota bene: lorsque c'est en cours de triaitement('encoursDeTraitement') => le bouton annulé est disponible   
   */
  disableAnnuler(commande: Commande) {
   return this.commandeService.disableAnnuler(commande)
  }


}
