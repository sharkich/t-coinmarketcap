import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatFormFieldModule, MatSortModule, MatTableModule, MatInputModule, MatCardModule, MatTabsModule,
  MatDialogModule, MatButtonModule
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import {AppComponent} from './app.component';
import {ExcelNumberPipe} from './shared/pipes/excel-pipe/excel-number.pipe';
import {CoinsService} from './shared/services/coins/coins.service';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CoinsComponent} from './coins/coins.component';
import {ROUTES} from './app.routes';
import {AddCoinToPortfolioDialogComponent} from './shared/dialogs/add-coin-to-portfolio-dialog/add-coin-to-portfolio-dialog.component';
import {FormsModule} from '@angular/forms';
import {PortfoliosService} from './shared/services/portfolios/portfolios.service';
import {RecalculateBuyPricesComponent} from './shared/dialogs/recalculate-buy-prices/recalculate-buy-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    ExcelNumberPipe,
    PortfolioComponent,
    CoinsComponent,
    AddCoinToPortfolioDialogComponent,
    RecalculateBuyPricesComponent
  ],
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {enableTracing: true} // <-- debugging purposes only
    ),

    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatButtonModule,

    HttpClientModule
  ],
  providers: [
    CoinsService,
    PortfoliosService
  ],
  entryComponents: [
    AddCoinToPortfolioDialogComponent,
    RecalculateBuyPricesComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
