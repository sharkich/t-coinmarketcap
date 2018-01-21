import {Coin} from './coin';

export class Portfolio {
  id: string;
  name: string;
  amount: number;
  description: string;
  coinId: string;
  goalPercentage: number;
  currentPercentage: number;
  buyPrice: number;
  currentPrice: number;
  buySum: number;
  currentSum: number;

  coin: Coin; // not for BE

  constructor(data: any = {}) {
    this.id = data.id || '' + Math.random();
    this.name = data.name;
    this.amount = data.amount || 0;
    this.description = data.description;
    this.coinId = data.coinId || (data.coin && data.coin.id);

    this.goalPercentage = +data.goalPercentage || 0;
    this.currentPercentage = +data.currentPercentage || 0;
    this.buyPrice = +data.buyPrice || 0;
    this.currentPrice = +data.currentPrice || 0;
    this.buySum = +data.buySum || 0;
    this.currentSum = +data.currentSum || 0;

    // private
    if (data.coin) {
      this.coin = new Coin(data.coin);
    }
  }

  get isValid(): boolean {
    return !!this.id && !!this.name && !!this.amount;
  }
}
