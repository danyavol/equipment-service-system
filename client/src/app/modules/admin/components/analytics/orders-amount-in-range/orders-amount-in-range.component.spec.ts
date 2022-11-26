import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersAmountInRangeComponent } from './orders-amount-in-range.component';

describe('OrdersAmountInRangeComponent', () => {
  let component: OrdersAmountInRangeComponent;
  let fixture: ComponentFixture<OrdersAmountInRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersAmountInRangeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersAmountInRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
