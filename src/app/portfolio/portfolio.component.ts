import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatSort, MatTableDataSource} from '@angular/material';
import {Portfolio} from '../portfolio';
import {Coin} from '../coin';
import {PortfoliosService} from '../shared/services/portfolios/portfolios.service';
import {AddCoinToPortfolioDialogComponent} from '../add-coin-to-portfolio-dialog/add-coin-to-portfolio-dialog.component';
import {CoinsService} from '../shared/services/coins/coins.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  goalPercentageSum: number;
  buySum: number;
  currentSum: number;
  portfolios: Portfolio[] = [];

  @ViewChild(MatSort) sort: MatSort;
  matTableDisplayedColumns = ['coinId', 'name', 'amount', 'buyPrice', 'buySum', 'currentPrice', 'currentSum', 'goalPercentage', 'currentPercentage', 'description', 'buttons'];
  matTableDataSource: MatTableDataSource<Portfolio> = new MatTableDataSource<Portfolio>(this.portfolios);

  constructor(private portfoliosService: PortfoliosService,
              private coinsService: CoinsService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.portfoliosService.list().subscribe((portfolios: Portfolio[]) => {
      console.log('portfolios', portfolios);
      this.portfolios = portfolios;
      this.goalPercentageSum = this.portfoliosService.getGoalPercentageSum();

      this.matTableDataSource = new MatTableDataSource<Portfolio>(this.portfolios);
      this.matTableDataSource.sort = this.sort;
    });
  this.coinsService.list().subscribe(() => {
    this.buySum = this.portfoliosService.getBuySum();
    this.currentSum = this.portfoliosService.getCurrentSum();
  });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.matTableDataSource.filter = filterValue;
  }

  onClickEdit(coin: Coin) {
    const dialogRef = this.dialog.open(AddCoinToPortfolioDialogComponent, {
      data: { coin }
    });

    dialogRef.afterClosed().subscribe((portfolio: Portfolio) => {
      console.log('edit', portfolio);
      // this.portfoliosService.edit(portfolio);
    });
  }

  onRecalculateBuyPrices() {

  }

}
