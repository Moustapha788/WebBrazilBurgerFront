import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { map, take } from 'rxjs';
import { Burger } from 'src/models/Burger';
import { ICatalogue } from 'src/models/ICatalogue';
import { Menu } from 'src/models/Menu';
import { DataService } from '../services/data/data.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent implements OnInit {

  burgers: Burger[] = [];
  menus: Menu[] = [];
  searchText: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getProduits().
      pipe(
        take(1),
        map((iCata: any) => {
          
          // console.log("Ma catalogue: ",iCata);

          iCata.burgers.forEach((produit: Burger) => {
            produit.choosen = false;
            this.burgers.push(produit);
          });
          iCata.menus.forEach((produit: Menu) => {
            produit.choosen = false;
            this.menus.push(produit);
          });

          // console.log("Ma catalogue: mes menus:::: "," mes menus: :",this.menus," mes burgers: :",this.burgers);

          // localStorage.setItem('products', JSON.stringify(iCata));
        })

      ).
      subscribe()

  }
}
