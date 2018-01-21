import { Injectable } from '@angular/core';
import {Portfolio} from '../../../portfolio';
import {Observable} from 'rxjs/Observable';
import {CoinsService} from '../coins/coins.service';
import {Coin} from '../../../coin';
import {HttpClient} from '@angular/common/http';

const PORTFOLIOS_URL = '/assets/portfolios/1.json';

@Injectable()
export class PortfoliosService {

  private coins: Coin[] = [];
  private portfolios: Portfolio[] = [];

  constructor(private coinsService: CoinsService,
              private http: HttpClient) {
    this.coinsService.list().subscribe((coins: Coin[]) => {
      this.coins = coins;
      this.updatePortfolio();
    });
  }

  add(portfolio: Portfolio): Observable<Portfolio> {
    this.portfolios.push(portfolio);
    this.updatePortfolio();
    // TODO: Save to BE
    return Observable.of(portfolio);
  }

  list(): Observable<Portfolio[]> {
    if (this.portfolios.length) {
      return Observable.of(this.portfolios);
    }

    return this.http.get(PORTFOLIOS_URL)
      .map((resp: any[]) => {
        const list = resp.map((data) => new Portfolio(data));
        this.portfolios = list;
        this.updatePortfolio();
        return list;
      });
  }

  private updatePortfolio() {
    this.portfolios.map((portfolio) => {
      if (!portfolio.coin) {
        portfolio.coin = this.coins.find((coin) => coin.id === portfolio.coinId);
      }
      if (portfolio.coin) {
        portfolio.currentPrice = portfolio.coin.price_usd;
      }
      portfolio.currentSum = portfolio.amount * portfolio.currentPrice;
      portfolio.buySum = portfolio.amount * portfolio.buyPrice;
    });
    this.portfolios.map((portfolio) => {
      portfolio.currentPercentage = portfolio.currentSum / this.getCurrentSum();
    });
  }

  getGoalPercentageSum(): number {
    return this.portfolios.reduce((sum, portfolio) => sum + portfolio.goalPercentage, 0);
  }

  getBuySum(): number {
    return this.portfolios.reduce((sum, portfolio) => sum + portfolio.buySum, 0);
  }

  getCurrentSum(): number {
    return this.portfolios.reduce((sum, portfolio) => sum + portfolio.currentSum, 0);
  }

  recalculateBuyPrices(buySum: number) {
    this.portfolios.map((portfolio) => {
      portfolio.buySum = buySum * portfolio.currentPercentage;
      portfolio.buyPrice = portfolio.buySum / portfolio.amount;
    });
  }

  isInPortfolio(coin: Coin) {
    return this.portfolios
      .map((portfolio) => portfolio.coin.id)
      .indexOf(coin.id) !== -1;
  }

}
