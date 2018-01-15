import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Coin} from '../coin';
import {Portfolio} from '../portfolio';

@Component({
  selector: 'app-add-coin-to-portfolio-dialog',
  templateUrl: './add-coin-to-portfolio-dialog.component.html',
  styleUrls: ['./add-coin-to-portfolio-dialog.component.scss']
})
export class AddCoinToPortfolioDialogComponent {

  portfolio: Portfolio = new Portfolio();

  constructor(public dialogRef: MatDialogRef<AddCoinToPortfolioDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    console.log('data', this.data);
    this.data.coin = <Coin>this.data.coin;
    this.portfolio.coin = this.data.coin;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter() {
  }

}
