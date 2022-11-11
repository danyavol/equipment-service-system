import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrderShellComponent } from './create-order-shell.component';

describe('CreateOrderShellComponent', () => {
  let component: CreateOrderShellComponent;
  let fixture: ComponentFixture<CreateOrderShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrderShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOrderShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
