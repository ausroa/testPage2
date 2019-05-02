import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public title: string;
  public links: string[];
  constructor() { }

  ngOnInit() {
    this.title = 'Sfr1';
    this.links = [
      'Campaign',
      'About',
      'Contact'
    ];
  }

}
