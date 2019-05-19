import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title: string;
  public links: object[];
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = 'Sfr1';
    this.links = [
      {name: 'shop', router: 'shop'},
      {name: 'look', router: 'campaign'},
      {name: 'product', router: 'product'},
      {name: 'about', router: 'about'},
      {name: 'contact', router: 'campaign'}
    ];
  }

  goToView(route) {
    switch(route) {
      case 'shop':
        this.router.navigate(['shop']);
        break;
      case 'look':
        this.router.navigate(['look']);
        break;
      case 'product':
        this.router.navigate(['product']);
        break;
      case 'about':
        this.router.navigate(['about']);
        break;
      case 'contact':
        this.router.navigate(['contact']);
        break;
    }
  }
}
