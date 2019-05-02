import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public footerText: string;

  constructor() { }

  ngOnInit() {
    this.footerText = 'Sfr1 Int Co.';
  }

}
