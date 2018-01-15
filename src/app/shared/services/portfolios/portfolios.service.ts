import { Injectable } from '@angular/core';
import {Portfolio} from '../../../portfolio';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PortfoliosService {

  constructor() { }

  add(portfolio: Portfolio): Observable<Portfolio> {
    console.log('add', portfolio);
    return Observable.of(portfolio);
  }

}
