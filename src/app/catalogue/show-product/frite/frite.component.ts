import { Component, Input, OnInit } from '@angular/core';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { FriteMenu } from 'src/models/SubProduct';

@Component({
  selector: 'app-frite',
  templateUrl: './frite.component.html',
  styleUrls: ['./frite.component.css']
})
export class FriteComponent implements OnInit {

  @Input()
  subProductFrite!: FriteMenu ;

  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
  }

  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }
}
