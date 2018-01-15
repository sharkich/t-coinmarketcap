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
    this.amount = data.amount;
    this.description = data.description;
    this.coinId = data.coinId || (data.coin && data.coin.id);

    this.goalPercentage = +data.goalPercentage;
    this.currentPercentage = +data.currentPercentage;
    this.buyPrice = +data.buyPrice;
    this.currentPrice = +data.currentPrice;
    this.buySum = +data.buySum;
    this.currentSum = +data.currentSum;

    // private
    this.coin = data.coin;
  }

  get isValid(): boolean {
    return !!this.id && !!this.name && !!this.amount;
  }
}
