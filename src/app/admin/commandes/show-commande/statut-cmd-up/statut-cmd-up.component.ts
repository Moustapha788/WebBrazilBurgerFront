import { Component, Input, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { Commande } from 'src/models/Commande';

@Component({
  selector: 'app-statut-cmd-up',
  templateUrl: './statut-cmd-up.component.html',
  styleUrls: ['./statut-cmd-up.component.css']
})
export class StatutCmdUpComponent implements OnInit {

 
  @Input()
  commande!:Commande;
  constructor(private commandeService:CommandeService) { }

  ngOnInit(): void {
  }

  statut(commande: Commande) {

    return this.commandeService.statut(commande);
    
  }

}
