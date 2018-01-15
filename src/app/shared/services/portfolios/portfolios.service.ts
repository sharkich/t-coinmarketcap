import { Injectable } from '@angular/core';
import {Portfolio} from '../../../portfolio';
import {Observable} from 'rxjs/Observable';
import {CoinsService} from '../coins/coins.service';
import {Coin} from '../../../coin';

@Injectable()
export class PortfoliosService {

  private coins: Coin[] = [];
  private portfolios: Portfolio[] = [
    new Portfolio({
      name: 'WEX',
      amount: 0.03442202,
      coinId: 'bitcoin',
      goalPercentage: 0.20,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 0.00621744,
      coinId: 'bitcoin',
      goalPercentage: 0.035,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'blockchain.info',
      amount: 0.00244395,
      coinId: 'bitcoin',
      goalPercentage: 0.015,
      buyPrice: 0
    }),

    new Portfolio({
      name: 'WEX',
      amount: 0.24998806,
      coinId: 'ethereum',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 0.00099262,
      coinId: 'ethereum',
      goalPercentage: 0.1,
      buyPrice: 0
    }),

    new Portfolio({
      name: 'Binance',
      amount: 77.00,
      coinId: 'ripple',
      goalPercentage: 0.10,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'WEX',
      amount: 0.0499,
      coinId: 'bitcoin-cash',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'hz',
      amount: 0.0499,
      coinId: 'nem',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 122.00,
      coinId: 'cardano',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'WEX',
      amount: 0.1996,
      coinId: 'litecoin',
      goalPercentage: 0.025,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 0.2300,
      coinId: 'litecoin',
      goalPercentage: 0.025,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 29.97,
      coinId: 'iota',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 0.85,
      coinId: 'neo',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 5.00,
      coinId: 'icon',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'WEX',
      amount: 0.09980001,
      coinId: 'zcash',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 8.00,
      coinId: 'waves',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 9.11142662,
      coinId: 'binance-coin',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'WEX',
      amount: 0,
      coinId: 'dash',
      goalPercentage: 0.05,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'WEX',
      amount: 0.0298,
      coinId: 'dashcoin',
      goalPercentage: 0,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 5.00,
      coinId: 'raiden-network-token',
      goalPercentage: 0,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 4.00,
      coinId: 'monaco',
      goalPercentage: 0,
      buyPrice: 0
    }),
    new Portfolio({
      name: 'Binance',
      amount: 2.79,
      coinId: 'eidoo',
      goalPercentage: 0,
      buyPrice: 0
    })
  ];

  constructor(private coinsService: CoinsService) {
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
    // TODO: Get from BE
    return Observable.of(this.portfolios);
  }

  private updatePortfolio() {
    this.portfolios.map((portfolio) => {
      if (!portfolio.coin) {
        portfolio.coin = this.coins.find((coin) => coin.id === portfolio.coinId);
      }
      portfolio.currentPrice = portfolio.coin.price_usd;
      portfolio.currentSum = portfolio.amount * portfolio.currentPrice;
      portfolio.buySum = portfolio.amount * portfolio.buyPrice;
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

}
