import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Coin} from './coin';

const COINMARKET_URL = 'https://api.coinmarketcap.com/v1/ticker/';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  coins: Coin[] = [];
  marketVolume = 0;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(COINMARKET_URL).subscribe((resp: any[]) => {
      this.coins = resp.map((data) => {
        const coin = new Coin(data);
        this.marketVolume += (+coin.market_cap_usd);
        return coin;
      });
      this.coins.forEach((coin: Coin) => {
        coin.marketShare = (+coin.market_cap_usd) / this.marketVolume;
      });
    });
  }

}
