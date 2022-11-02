import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListShellComponent } from './orders-list-shell.component';

describe('OrdersListComponent', () => {
  let component: OrdersListShellComponent;
  let fixture: ComponentFixture<OrdersListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersListShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
