import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Boisson } from 'src/models/Boisson';
import { BoissonMenu } from 'src/models/SubProduct';

@Component({
  selector: 'app-boisson',
  templateUrl: './boisson.component.html',
  styleUrls: ['./boisson.component.css'],
  encapsulation: ViewEncapsulation.Emulated


})
export class BoissonComponent implements OnInit {

  @Input()
  boissons!: BoissonMenu;

  @Input()
  j!: number;


  constructor(private transformationService: TransformationService, private menuService: MenuService) {
  }


  ngOnInit(): void {

    // console.log(this.boissons);

  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }


  restant(i:number){
   return this.menuService.tabChoses[i]
  }






}
