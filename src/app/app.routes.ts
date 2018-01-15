import {Routes} from '@angular/router';
import {CoinsComponent} from './coins/coins.component';
import {PortfolioComponent} from './portfolio/portfolio.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: CoinsComponent
  },
  {
    path: 'portfolio',
    component: PortfolioComponent
  },
  {path: '**', component: CoinsComponent}
];
