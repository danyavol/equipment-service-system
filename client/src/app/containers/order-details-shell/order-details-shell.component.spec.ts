import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsShellComponent } from './order-details-shell.component';

describe('OrderDetailsShellComponent', () => {
  let component: OrderDetailsShellComponent;
  let fixture: ComponentFixture<OrderDetailsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderDetailsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
