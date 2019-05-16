import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Product} from '../../services/product';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-archives-page',
  templateUrl: './archives-page.component.html',
  styleUrls: ['./archives-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0, height: '100%'}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class ArchivesPageComponent implements OnInit {
  public product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.products.find((p) => p.name === 'original pack ballistic');
  }

  get products() {
    return this.productService.products;
  }
}
