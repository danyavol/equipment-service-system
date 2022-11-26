import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAmountPerPeriodComponent } from './orders-amount-per-period.component';

describe('OrdersAmountPerPeriodComponent', () => {
  let component: OrdersAmountPerPeriodComponent;
  let fixture: ComponentFixture<OrdersAmountPerPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAmountPerPeriodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersAmountPerPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
