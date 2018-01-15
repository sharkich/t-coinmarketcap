import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navLinks = [
    {
      path: '',
      label: 'Coins'
    },
    {
      path: 'portfolio',
      label: 'Portfolio'
    }
  ];

  constructor() {
  }

}
