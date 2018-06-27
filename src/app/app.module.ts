import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TickerComponent } from './ticker/ticker.component';
import { StocksComponent } from './stocks/stocks.component';
import { AlertComponent } from './alert/alert.component';

import { LocalStorageService } from './services/local-storage.service';
import { AccountService } from './services/account.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StockInterceptor } from './services/interceptor.service';
import { AlertService } from './services/alert.service';

@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    TickerComponent,
    StocksComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule,
    HttpClientModule
  ],
  providers: [
    LocalStorageService,
    CurrencyPipe,
    AccountService,
    AlertService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StockInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
