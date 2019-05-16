import {Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from '../../services/product.service';
import {animate, style, transition, trigger} from '@angular/animations';
import {Product} from '../../services/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class ShopPageComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  get products() {
    return this.productService.products;
  }

  testRun(product: Product) {
    switch(product.name) {
      case 'original pack ballistic':
        this.router.navigate(['pack-ballistic'], {relativeTo: this.route});
        break;
    }
  }
}
