import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AddCoinToPortfolioDialogComponent} from '../add-coin-to-portfolio-dialog/add-coin-to-portfolio-dialog.component';

@Component({
  selector: 'app-recalculate-buy-prices',
  templateUrl: './recalculate-buy-prices.component.html',
  styleUrls: ['./recalculate-buy-prices.component.scss']
})
export class RecalculateBuyPricesComponent {

  sum: number = 0;

  constructor(public dialogRef: MatDialogRef<RecalculateBuyPricesComponent>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
