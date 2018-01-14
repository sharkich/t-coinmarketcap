import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import {AppComponent} from './app.component';
import {ExcelNumberPipe} from './excel-pipe/excel-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExcelNumberPipe
  ],
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    CdkTableModule,
    MatTableModule,

    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
