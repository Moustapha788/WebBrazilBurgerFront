import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Commande, StatutCommande } from 'src/models/Commande';

@Injectable({
  providedIn: 'root'
})
export class TransformationService {

  constructor(private sanitizer: DomSanitizer) { }

  images = [
    "burgers/burger-1.jpg",
    "burgers/burger-2.jpg",
    "burgers/burger-3.jpeg",
    "burgers/burger-4.jpg",
    "burgers/burger-5.jpg",
    "burgers/burger-6.jpg",
    "burgers/burger-7.jpg",
    "burgers/burger-8.jpg",
    "burgers/burger-9.jpg",
    "burgers/burger-10.jpg",
    "burgers/burger-11.jpg",
    "burgers/burger-12.jpg",
    "burgers/burger-13.jpg",
    "burgers/burger-14.jpg",
    "burgers/burger-15.jpg",
    "burgers/burger-16.png",
    "menus/menu-burger-1.jpeg",
    "menus/menu-burger-2.jpg",
  ]
  randomImage() {
    let posImage: number = Math.floor(Math.random() * this.images.length)
    return this.images[posImage];
  }
  transform(img_url: string): SafeResourceUrl | string {
    if (img_url != '') {
      return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64, ' + img_url);
    } else {

      return "assets/images/burgers/burger-15.jpg";
      // return "assets/images/logo1.png";
      // return 'assets/images/' + this.randomImage();
    }
  }
  
}
