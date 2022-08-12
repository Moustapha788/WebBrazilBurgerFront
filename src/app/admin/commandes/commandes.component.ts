import { Component, OnInit } from '@angular/core';
import { take, map } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { PanierService } from 'src/app/services/panier/panier.service';
import { Commande } from 'src/models/Commande';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.css']
})

export class CommandesComponent implements OnInit {

  tableauDesCommandes: Commande[] = []
  searchDate!: string;


  constructor(private dataService: DataService, private panierService: PanierService) { }

  ngOnInit(): void {
    this.searchDate = new Date().toDateString();
    // console.log(this.searchText);

    this.dataService.getAllcommandes().
      pipe(
        take(1),
        map((data: any) => {
          data.forEach((commande: Commande) => {
            this.tableauDesCommandes.push(commande)
          })

        })
      ).subscribe()
    // console.log(this.tableauDesCommandes);
  }



  convertToDate(str: string) {
    return this.panierService.stringToDate(str)
  }


}
