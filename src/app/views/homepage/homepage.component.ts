import { Component, OnInit } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({opacity: 0}),
        animate('1s', style({opacity: 1}))
      ])
    ])
  ]
})
export class HomepageComponent implements OnInit {
  public tilesUrls: string[];
  public tiles: string[];
  public soloTile: number[];
  public row2ContentImg: string;
  public autoPlay: boolean;

  constructor(private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {


    this.tilesUrls = [
      'assets/pictures/banner1.jpg'
      // 'assets/pictures/3_side_lawson.JPG',
      // 'assets/pictures/5_lawson_detail.JPG',
      // 'assets/pictures/5_lawson_model1.JPG',
      // 'assets/pictures/6_lawson_model2.JPG',
      // 'assets/pictures/7_lawson_charlotte.JPG',
      // 'assets/pictures/pack_devin_1.jpg'
    ];

    this.tiles = [
      'assets/pictures/backpack_4.jpg',
      'assets/pictures/pack_devin_1.jpg',
      'assets/pictures/EDC.png'
    ];

    this.soloTile = [
      2
    ];

    this.row2ContentImg = 'assets/pictures/pack_devin_1.jpg';

    this.autoPlay = false;
  }

  onSelect(): void {
    this.router.navigate(['shop']);
  }
}
