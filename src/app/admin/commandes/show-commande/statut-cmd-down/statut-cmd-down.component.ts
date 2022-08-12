import { Component, Input, OnInit } from '@angular/core';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { ProduitCmde } from 'src/models/Commande';

@Component({
  selector: 'app-statut-cmd-down',
  templateUrl: './statut-cmd-down.component.html',
  styleUrls: ['./statut-cmd-down.component.css']
})
export class StatutCmdDownComponent implements OnInit {

  @Input()
  produitCmde!:ProduitCmde;
  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
  }
  afficheImage(img_url: string){
    return this.transformationService.transform(img_url);
  }

}
