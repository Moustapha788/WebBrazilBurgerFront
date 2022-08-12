import { Injectable } from '@angular/core';
import { Commande, StatutCommande } from 'src/models/Commande';
import { DataService } from '../data/data.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  statesDisable: string[] = [
    StatutCommande.enCoursDeLivraison,
    // StatutCommande.annule,
    // StatutCommande.livre,
    StatutCommande.termine,
    StatutCommande.modifie,
  ]

  constructor(private dataService: DataService) { }


  action(commande: Commande, textButton: string) {
    if (textButton == "Annuler") {
      this.dataService.updateCommande(commande.id, StatutCommande.annule);
    } else if (textButton == "Valider") {
      this.dataService.updateCommande(commande.id, StatutCommande.valide);
    }else if (textButton == "Finir Traitement") {
      this.dataService.updateCommande(commande.id, StatutCommande.traite);
    } else if (textButton == "Traiter") {
      this.dataService.updateCommande(commande.id, StatutCommande.traite);
    } else if (textButton == "Livrer") {
      this.dataService.updateCommande(commande.id, StatutCommande.livre);
    } else if (textButton == "Terminer") {
      this.dataService.updateCommande(commande.id, StatutCommande.termine);
    }
    
  }

  disableAnnuler(commande: Commande) {
    if (this.statesDisable.includes(commande.statut)) {
      return true;
    }
    return false;
  }

  disableValider(){
    
  }


  statut(commande: Commande) {
    if (commande.statut == StatutCommande.enAttente) {
      return "en attente";
    } else if (commande.statut == StatutCommande.valide.toString()) {
      return "validé";
    } else if (commande.statut == StatutCommande.enCoursDeTraitement) {
      return "en traitement";
    }else if (commande.statut == StatutCommande.traite) {
      return "déja traité";
    } else if (commande.statut == StatutCommande.enCoursDeLivraison) {
      return "en cours de livraison";
    } else if (commande.statut == StatutCommande.annule) {
      return "annulé";
    } else if (commande.statut == StatutCommande.livre) {
      return 'livré'
    } else if (commande.statut == StatutCommande.modifie) {
      return "modifié";
    } else {
      return "terminé";
    }

  }


  /* statutButton(commande: Commande, textButton: string, colorTerminer: boolean, colorValider: boolean, colorRouge: boolean, colorLivrer: boolean) {
    if (commande.statut == StatutCommande.enAttente) {
      colorValider = true;
      textButton = "Valider";
    } else if (commande.statut == StatutCommande.enCoursDeTraitement) {
      colorLivrer = true;
      textButton = "Livrer";
    } else if (commande.statut == StatutCommande.Traite) {
      colorLivrer = true;
      textButton = "Livrer";
    } else if (commande.statut == StatutCommande.enCoursDeLivraison) {
      colorValider = true;
      textButton = "Terminer";
    } else if (commande.statut == StatutCommande.livre) {
      colorValider = true;
      textButton = "Terminer";
    } else if (commande.statut == StatutCommande.termine) {
      colorTerminer = true;
    } else if (commande.statut == StatutCommande.annule) {
      colorRouge = true;
    }
  }
 */
}
