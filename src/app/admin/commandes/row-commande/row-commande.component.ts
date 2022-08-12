import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/services/commande/commande.service';
import { DataService } from 'src/app/services/data/data.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Commande, StatutCommande } from 'src/models/Commande';

@Component({
  selector: 'app-row-commande',
  templateUrl: './row-commande.component.html',
  styleUrls: ['./row-commande.component.css']
})
export class RowCommandeComponent implements OnInit {

  @Input()
  commande!: Commande;

  textButton: string = "Annuler";
  colorRouge: boolean = false;
  colorValider: boolean = false;
  colorLivrer: boolean = false;
  colorTerminer: boolean = false;

  @Input()
  i!: number


  constructor(private router: Router, private transformationService: TransformationService, private dataService: DataService, private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.statutButton(this.commande);
  }

  detail(commande: Commande) {
    this.router.navigateByUrl("admin/commandes/" + commande.id);
  }

  action(commande: Commande) {
    this.commandeService.action(commande, this.textButton);
    location.reload();
    // this.router.navigateByUrl("commandes/"+commande.id);
  }

  statut(commande: Commande) {
    return this.commandeService.statut(commande);
  }
  act(commande: Commande): boolean {
    if (this.commandeService.disableAnnuler((commande))) {
      return true;
    } else {
      return false;
    }
  }

  disableAnnuler(commande: Commande) {
    return this.commandeService.disableAnnuler(commande);
  }

  statutButton(commande: Commande) {
    if (commande.statut == StatutCommande.enAttente) {
      this.colorValider = true;
      // this.activeColor(this.colorValider);
      this.textButton = "Valider";
    } else if (commande.statut == StatutCommande.enCoursDeTraitement) {
      this.colorLivrer = true;
      // this.activeColor(this.colorLivrer);
      this.textButton = "Finir Traitement";
    } else if (commande.statut == StatutCommande.valide) {
      this.colorValider = true;
      // this.activeColor(this.colorValider);
      this.textButton = "Traiter";
    } else if (commande.statut == StatutCommande.traite) {
      this.colorLivrer = true;
      // this.activeColor(this.colorLivrer);
      this.textButton = "Livrer";
    } else if (commande.statut == StatutCommande.enCoursDeLivraison) {
      this.colorValider = true;
      // this.activeColor(this.colorValider);
      this.textButton = "Livrer";
    } else if (commande.statut == StatutCommande.livre) {
      this.colorValider = true;
      // this.activeColor(this.colorValider);
      this.textButton = "Terminer";
    } else if (commande.statut == StatutCommande.termine) {
      this.colorTerminer = true;
      // this.activeColor(this.colorTerminer);
      this.textButton = "Archiver";
    } else if (commande.statut == StatutCommande.annule) {
      this.colorRouge = true;
      // this.activeColor(this.colorRouge);
      this.textButton = "Archiver";

    }
  }

  activeColor(color: boolean) {
    color = true;
    const colors = [
      this.colorRouge,
      this.colorValider,
      this.colorLivrer,
      this.colorTerminer
    ];
    colors.splice(colors.indexOf(color), 1)
    colors.forEach(c => {
      c = true
    });
  }
  afficheZone(commande: Commande):string {
    if (commande.zone) {
      return commande.zone.nom;
    } else {
      return "pas de livraison"
    }
  }

}
