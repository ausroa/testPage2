import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-mag-flip-book',
  templateUrl: './mag-flip-book.component.html',
  styleUrls: ['./mag-flip-book.component.scss']
})
export class MagFlipBookComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((e) => {
      console.log(e);
      if(e instanceof NavigationEnd && e.url === '/about') {
        window.location.reload();
      }
    });
  }
}
