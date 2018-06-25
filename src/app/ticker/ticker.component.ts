import { Component, Input, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-ticker',
  templateUrl: './ticker.component.html',
  styleUrls: ['./ticker.component.css'],
  animations: [
    trigger('slideOut', [
      transition(':leave', [
        style({
          marginLeft: 0,
          opacity: 1
        }),
        animate('1000ms ease-in-out', style({
          marginLeft: '-324px',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class TickerComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('stocks') _stocks: any = [];
  stocks: any = [];
  interval: any;
  page = 0;

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.nextStock();
    }, 3000);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(): void {
    if (this._stocks.length && this.stocks.length < 30) {
      if (this.page * 100 > this._stocks.length) {
        this.page = 0;
      }
      const additions = this._stocks.slice(this.page * 100, (this.page + 1) * 100);
      this.stocks.push(...additions);
      this.page++;
    }
  }

  private nextStock(): void {
    this.stocks.splice(0, 1);
  }
}
