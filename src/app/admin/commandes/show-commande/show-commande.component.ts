import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data/data.service';
import { Commande, StatutCommande } from 'src/models/Commande';

@Component({
  selector: 'app-show-commande',
  templateUrl: './show-commande.component.html',
  styleUrls: ['./show-commande.component.css']
})
export class ShowCommandeComponent implements OnInit {

  
  commande!: Commande;
  id: number = +this.activeRouter.snapshot.params["id"];
  notification: boolean = false;

  constructor(private activeRouter: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getOneCommande(this.id).subscribe((data: Commande) => {
      console.log(data);
      this.commande = data
      console.log(this.commande);
    });
  }


  /* 
  nota bene: dans le  bouton annuler la commande
   */
  annuler(commande: Commande) {
  
    this.dataService.updateCommande(commande.id, StatutCommande.annule);
    this.notification = !this.notification;
  }

  /*  
   nota bene: lorsque c'est en cours de triaitement('encoursDeTraitement') => le bouton annulé est disponible   
   */
  disable(commande: Commande) {
    const states: string[] = ['enCoursDeLivraison', 'annule', 'valide']
    if (states.includes(commande.statut)) {
      return true;
    }
    return false;
  }

  valider(commande: Commande) {

    this.dataService.updateCommande(commande.id,StatutCommande.valide);
    this.notification = !this.notification;

  }

}
