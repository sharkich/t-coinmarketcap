import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecalculateBuyPricesComponent } from './recalculate-buy-prices.component';

describe('RecalculateBuyPricesComponent', () => {
  let component: RecalculateBuyPricesComponent;
  let fixture: ComponentFixture<RecalculateBuyPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecalculateBuyPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecalculateBuyPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
