import { Injectable } from '@angular/core';
import { IStock } from './stocks.model';
import { LocalStorageService } from './local-storage.service';
import { AlertService } from './alert.service';


const defaultBalance: number = 10000;
@Injectable()
export class AccountService {


  private _balance: number = defaultBalance;
  private _cost: number = 0;
  private _value: number = 0;
  private _stocks: IStock[] = [];

  get balance(): number { return this._balance; }
  get cost(): number { return this._cost; }
  get value(): number { return this._value; }
  get stocks(): IStock[] { return this._stocks; }


  constructor(private localStorageService: LocalStorageService, private alertService: AlertService) {

  }

  purchase(stock: IStock): void {
    stock = Object.assign({}, stock);

    if (stock.price < this.balance) {
      this._balance = this.debit(stock.price, this.balance);
      stock.cost = stock.cost;
      this._cost = this.credit(stock.price, this.cost);
      stock.change = 0;
      this._stocks.push(stock);
      this.calculateValue();
      this.cacheValues();
      this.alertService.alert(`You bought ${stock.symbol} for $${stock.price}`, 'success');
    } else {
      this.alertService.alert(`You have insufficient funds to buy ${stock.symbol}`, 'danger');
    }
  }

  sell(index: number): void {
    const stock = this.stocks[index];
    if (stock) {
      this._balance = this.credit(stock.price, this.balance);
      this._stocks.splice(index, 1);
      this._cost = this.debit(stock.price, this.cost);
      this.calculateValue();
      this.cacheValues();
      this.alertService.alert(`You sold ${stock.symbol} for $${stock.price}`, 'success');
    } else {
      this.alertService.alert(`You do not own the ${stock.symbol} stock.`, 'danger');
    }
  }

  init() {
    this._stocks = this.localStorageService.get('stocks', []);
    this._balance = this.localStorageService.get('balance', defaultBalance);
    this._value = this._cost = this.localStorageService.get('cost', 0);
  }

  reset() {
    this._stocks = [];
    this._balance = defaultBalance;
    this._value = this._cost = 0;
    this.cacheValues();
  }

  calculateValue(): void {
    this._value = this._stocks
      .map(stock => stock.price)
      .reduce((a, b) => a + b, 0);
  }

  debit(amount: number, balance: number): any {
    return (balance * 100 - amount * 100) / 100;
  }


  credit(amount: any, balance: any): any {
    return (balance * 100 + amount * 100) / 100;
  }

  private cacheValues() {
    this.localStorageService.set('stocks', this.stocks);
    this.localStorageService.set('balance', this.balance);
    this.localStorageService.set('cost', this.cost);
  }

}
