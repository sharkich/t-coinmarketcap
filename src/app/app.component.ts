import {Component, OnInit, ViewChild} from "@angular/core";

import {MatTableDataSource, MatSort} from '@angular/material';

import {Coin} from './coin';
import {CoinsService} from './shared/services/coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  coins: Coin[] = [];

  @ViewChild(MatSort) sort: MatSort;
  matTableDisplayedColumns = ['rank', 'image', 'name', 'symbol', 'price_usd'];
  matTableDataSource: MatTableDataSource<Coin> = new MatTableDataSource<Coin>(this.coins);

  constructor(private coinsService: CoinsService) {
  }

  ngOnInit() {
    this.coinsService.coins().subscribe((coins: Coin[]) => {
      console.log('coins', coins);
      this.coins = coins;
      this.matTableDataSource = new MatTableDataSource<Coin>(this.coins);
      this.matTableDataSource.sort = this.sort;
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.matTableDataSource.filter = filterValue;
  }

}
