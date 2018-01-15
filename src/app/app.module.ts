import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSortModule, MatTableModule, MatInputModule, MatCardModule, MatTabsModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import {AppComponent} from './app.component';
import {ExcelNumberPipe} from './shared/pipes/excel-pipe/excel-number.pipe';
import {CoinsService} from './shared/services/coins.service';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CoinsComponent} from './coins/coins.component';
import {ROUTES} from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    ExcelNumberPipe,
    PortfolioComponent,
    CoinsComponent
  ],
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {enableTracing: true} // <-- debugging purposes only
    ),

    BrowserModule,

    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
    MatTabsModule,

    HttpClientModule
  ],
  providers: [
    CoinsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
