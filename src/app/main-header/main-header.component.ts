import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PanierService } from '../services/panier/panier.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  items$: Observable<any> = this.panierService.items$

  constructor( private panierService: PanierService) { }

  ngOnInit(): void {
  }

}
