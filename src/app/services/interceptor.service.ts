import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AccountService } from './account.service';
import { ConfigService } from './config.service';
import { IStock } from './stocks.model';

@Injectable()
export class StockInterceptor implements HttpInterceptor {

  constructor(private accountService: AccountService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const request = req.clone();

    request.headers.append('Accept', 'application/json');

    return next.handle(request).pipe(tap(event => {

      console.log(event);

      if (event instanceof HttpResponse && event.url === ConfigService.get('api')) {

        const stocks = event.body as Array<IStock>;

        const symbols = this.accountService.stocks.map(stock => stock.symbol);

        stocks.forEach(stock => {
          this.accountService.stocks.map(item => {
            if (stock.symbol === item.symbol) {
              item.price = stock.price;
              item.change = ((stock.price * 100) - (item.cost * 100)) / 100;
            }
          });
        });
        this.accountService.calculateValue();
        return stocks;

      }
    }) );
  }
}
