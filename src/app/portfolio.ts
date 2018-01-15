import {Coin} from './coin';

export class Portfolio {
  id: string;
  name: string;
  amount: number;
  description: string;
  coin: Coin;

  constructor(data: any = {}) {
    this.id = data.id || '' + Math.random();
    this.name = data.name;
    this.amount = data.amount;
    this.description = data.description;
    this.coin = data.coin;
  }

  get isValid(): boolean {
    return !!this.id && !!this.name && !!this.amount;
  }
}
