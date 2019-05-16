import { Injectable } from '@angular/core';
import {Product} from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products: Product[] = [
    {
      name: 'duffel',
      img: 'assets/pictures/shop_duffel.jpg',
      price: '0.00',
      displayImgs: {}
    },
    {
      name: 'lawson',
      img: 'assets/pictures/shop_lawson.jpg',
      price: '0.00',
      displayImgs: {}
    },
    {
      name: 'original pack ballistic',
      img: 'assets/pictures/shop_pack.jpg',
      price: '0.00',
      displayImgs: {
        img1: 'assets/pictures/pack_crop_1.jpg',
        img2: 'assets/pictures/pack_crop_2.jpg',
        img3: 'assets/pictures/pack_crop_3.jpg',
        img4: 'assets/pictures/pack_crop_4.jpg',
        img5: 'assets/pictures/pack_devin_1.jpg'
      }
    },
    {
      name: 'passport',
      img: 'assets/pictures/shop_passport.jpg',
      price: '0.00',
      displayImgs: {}
    },
    {
      name: 'backpack',
      img: 'assets/pictures/shop_pack.jpg',
      price: '0.00',
      displayImgs: {}
    },
    {name: 'passport',
      img: 'assets/pictures/shop_passport.jpg',
      price: '0.00',
      displayImgs: {}
    }
  ];

  constructor() { }

}
