import { Component, Input, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Commande } from 'src/models/Commande';

@Component({
  selector: 'app-statut-cmd-left',
  templateUrl: './statut-cmd-left.component.html',
  styleUrls: ['./statut-cmd-left.component.css']
})
export class StatutCmdLeftComponent implements OnInit {

  @Input()
  commande!:Commande;
  constructor(private commandeService:CommandeService) { }

  ngOnInit(): void {
  }

  statut(commande: Commande) {

    return this.commandeService.statut(commande);
    
  }
}
