import { Component, Input, OnInit } from '@angular/core';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Burger } from 'src/models/Burger';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  @Input()
  burger!: Burger ;
  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }
}
