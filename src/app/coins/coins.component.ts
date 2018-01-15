import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';

import {Coin} from '../coin';
import {CoinsService} from '../shared/services/coins.service';
import {AddCoinToPortfolioDialogComponent} from '../add-coin-to-portfolio-dialog/add-coin-to-portfolio-dialog.component';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.scss']
})
export class CoinsComponent implements OnInit {

  coins: Coin[] = [];

  @ViewChild(MatSort) sort: MatSort;
  matTableDisplayedColumns = ['rank', 'image', 'name', 'symbol', 'price_usd', 'marketShare'];
  matTableDataSource: MatTableDataSource<Coin> = new MatTableDataSource<Coin>(this.coins);

  constructor(private coinsService: CoinsService,
              public dialog: MatDialog) { }

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

  onClickRow(coin: Coin) {
    console.log('select coin', coin);
    const dialogRef = this.dialog.open(AddCoinToPortfolioDialogComponent, {
      data: { coin }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('result', result);
    });
  }

}