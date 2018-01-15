import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatSortModule, MatTableModule, MatInputModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import {AppComponent} from './app.component';
import {ExcelNumberPipe} from './shared/pipes/excel-pipe/excel-number.pipe';
import {CoinsService} from './shared/services/coins.service';

@NgModule({
  declarations: [
    AppComponent,
    ExcelNumberPipe
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CdkTableModule,
    MatTableModule,
    MatSortModule,

    HttpClientModule
  ],
  providers: [
    CoinsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
