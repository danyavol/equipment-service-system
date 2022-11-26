import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrdersAmountComponent } from './active-orders-amount.component';

describe('ActiveOrdersAmountComponent', () => {
  let component: ActiveOrdersAmountComponent;
  let fixture: ComponentFixture<ActiveOrdersAmountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveOrdersAmountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveOrdersAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
