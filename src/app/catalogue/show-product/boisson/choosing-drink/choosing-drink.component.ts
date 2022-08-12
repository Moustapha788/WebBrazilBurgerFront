import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Boisson, SousBoisson } from 'src/models/Boisson';

@Component({
  selector: 'app-choosing-drink',
  templateUrl: './choosing-drink.component.html',
  styleUrls: ['./choosing-drink.component.css'],
  encapsulation: ViewEncapsulation.Emulated

})
export class ChoosingDrinkComponent implements OnInit {

  @Input()
  drink !: SousBoisson;

  @Input()
  k!: number;

  

  constructor(private transformationService: TransformationService, private menuService: MenuService) { }

  ngOnInit(): void {
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }

  quantite: number = 0;
  moins(boisson: Boisson, i: number) {
    // console.log(this.quantite);
    if (this.quantite == 0) {
      return;
    }
    this.quantite--;
    this.menuService.tabChoses[i].qteChoisis--;
    // console.log(this.menuService.tabChoses[i]);

    // this.menuService.isQteNormal(this.menuService.tabChoses[i])
  }

  plus(boisson: Boisson, i: number) {
    // console.log(this.quantite);
    if (this.quantite == boisson.quantiteStock || this.menuService.isQteNormal(this.menuService.tabChoses[i])) {
      return;
    }
    this.quantite++;
    this.menuService.tabChoses[i].qteChoisis++;
    // console.log(this.menuService.tabChoses[i]);
   
    // this.menuService.tabChoses[i].qteChoisis == this.menuService.tabChoses[i].qteTotal
  }


  maxAtteint(i: number): boolean {
    return this.menuService.isQteNormal(this.menuService.tabChoses[i])
  }
  choosen() {
    return this.quantite > 0 ? true : false;
  }
}
