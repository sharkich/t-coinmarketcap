export class Coin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  price_usd: number;
  price_btc: number;
  '24h_volume_usd': number;
  market_cap_usd: number;
  available_supply: number;
  total_supply: number;
  max_supply: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  last_updated: Date;

  marketShare: number;
  image: string;
  rankChange: number;

  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.name;
    this.symbol = data.symbol;
    this.rank = +data.rank;
    this.price_usd = +data.price_usd;
    this.price_btc = +data.price_btc;
    this['24h_volume_usd'] = +data['24h_volume_usd'];
    this.market_cap_usd = +data.market_cap_usd;
    this.available_supply = +data.available_supply;
    this.total_supply = +data.total_supply;
    this.max_supply = +data.max_supply;
    this.percent_change_1h = +data.percent_change_1h;
    this.percent_change_24h = +data.percent_change_24h;
    this.percent_change_7d = +data.percent_change_7d;
    this.last_updated = new Date(+data.last_updated);

    this.marketShare = +data.marketShare;
    this.image = `https://files.coinmarketcap.com/static/img/coins/32x32/${this.id}.png`;
    this.rankChange = data.rankChange;
  }
}
