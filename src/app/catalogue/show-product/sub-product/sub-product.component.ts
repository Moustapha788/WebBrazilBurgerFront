import { Component, Input, OnInit } from '@angular/core';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Burger } from 'src/models/Burger';
import { Menu } from 'src/models/Menu';
import { BurgerMenu, FriteMenu } from 'src/models/SubProduct';

@Component({
  selector: 'app-sub-product',
  templateUrl: './sub-product.component.html',
  styleUrls: ['./sub-product.component.css']
})
export class SubProductComponent implements OnInit {

  @Input()
  subProduct!: BurgerMenu ;


  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
    // console.log(this.subProduct);

  }


  typeProduit(product: any, key: string): any {
    if (key == "burgers") {
      return product.burger;
    } else if (key == "frites") {
      return product.frite;

    } else if (key == "boissons") {
      return product.boisson;
    } else {
      return "none";
    }
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }
}

