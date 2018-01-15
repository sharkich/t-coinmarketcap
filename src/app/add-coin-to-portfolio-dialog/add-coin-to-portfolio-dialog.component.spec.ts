import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoinToPortfolioDialogComponent } from './add-coin-to-portfolio-dialog.component';

describe('AddCoinToPortfolioDialogComponent', () => {
  let component: AddCoinToPortfolioDialogComponent;
  let fixture: ComponentFixture<AddCoinToPortfolioDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCoinToPortfolioDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCoinToPortfolioDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
