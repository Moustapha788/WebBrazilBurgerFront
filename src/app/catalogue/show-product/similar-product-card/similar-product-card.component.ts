import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, take } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { TransformationService } from 'src/app/services/transformation/transformation.service';
import { Burger } from 'src/models/Burger';
import { ICatalogue } from 'src/models/ICatalogue';
import { Menu } from 'src/models/Menu';

@Component({
  selector: 'app-similar-product-card',
  templateUrl: './similar-product-card.component.html',
  styleUrls: ['./similar-product-card.component.css']
})
export class SimilarProductCardComponent implements OnInit {

  @Input()
  similarProduct!: Menu | Burger;
  @Input()
  z: any
  _id!:number


  constructor(private transformationService: TransformationService, private dataService: DataService, private router: Router, private activedRouter: ActivatedRoute,) { }

  ngOnInit(): void {
    
  }


  afficheImage(img_url: string) {
    return this.transformationService.transform(img_url);
  }

  detailOfSimilar(similarProduct: Menu | Burger) {
    this.router.navigateByUrl("produit/" + similarProduct.id);
    this.activedRouter.paramMap.subscribe((param:any)=>{
     this._id= param.get("id");
    



  



    //  console.log(this._id);
     
      
    })
    // this.router.navigateByUrl("produit/"+id)
    // this.dataService.getProduits().subscribe()
    // location.reload();
    // alert("detail produit")
  }

  isMenu(product: any) {
    return this.dataService.isMenu(product);
  }
}
