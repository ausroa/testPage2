import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title: string;
  public links: object[];
  constructor() { }

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

}
