import {Injectable} from '@angular/core';
import {Coin} from 'app/coin';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const COINMARKET_URL = 'https://api.coinmarketcap.com/v1/ticker/';

@Injectable()
export class CoinsService {

  private marketVolume = 0;

  constructor(private http: HttpClient) {
  }

  coins(): Observable<Coin[]> {
    return this.http.get(COINMARKET_URL)
      .map((resp: any[]) => {
        const list = resp.map((data) => {
          const coin = new Coin(data);
          coin.image = `https://files.coinmarketcap.com/static/img/coins/32x32/${coin.id}.png`;
          this.marketVolume += (+coin.market_cap_usd);
          return coin;
        });

        list.forEach((coin: Coin) => {
          coin.marketShare = (+coin.market_cap_usd) / this.marketVolume;
        });

        return list;
      });
  }

}