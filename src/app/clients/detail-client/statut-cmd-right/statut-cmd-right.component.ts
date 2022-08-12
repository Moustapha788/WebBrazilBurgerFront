import { Component, Input, OnInit } from '@angular/core';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import {  ProduitCmde } from 'src/models/Commande';

@Component({
  selector: 'app-statut-cmd-right',
  templateUrl: './statut-cmd-right.component.html',
  styleUrls: ['./statut-cmd-right.component.css']
})
export class StatutCmdRightComponent implements OnInit {

  @Input()
  produitCmde!:ProduitCmde;
  constructor(private transformationService: TransformationService) { }

  ngOnInit(): void {
  }
  afficheImage(img_url: string){
    return this.transformationService.transform(img_url);
  }
}
