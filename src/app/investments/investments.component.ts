import { Component, DoCheck } from '@angular/core';
import { AccountService } from '../services/account.service';
import { IStock } from '../services/stocks.model';
import { StocksService } from '../services/stocks.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
  // , providers: [StocksService]
})
export class InvestmentsComponent implements DoCheck {
  cost: number = 0;
  value: number = 0;
  change: number = 0;
  stocks: IStock[] = [];
  length: number = 0;

  constructor(private accountService: AccountService) { }

  sell(index): void {
    this.accountService.sell(index);
  }

  ngDoCheck() {
    if (this.accountService.stocks.length !== this.stocks.length) {
      this.stocks = this.accountService.stocks;
    }

    if (this.cost !== this.accountService.cost || this.value !== this.accountService.value) {
      this.cost = this.accountService.cost;
      this.value = this.accountService.value;
      this.change = this.accountService.value - this.accountService.cost;
    }

  }


}
