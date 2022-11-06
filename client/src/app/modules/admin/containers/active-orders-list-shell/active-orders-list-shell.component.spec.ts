import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveOrdersListShellComponent } from './active-orders-list-shell.component';

describe('ActiveOrdersListShellComponent', () => {
  let component: ActiveOrdersListShellComponent;
  let fixture: ComponentFixture<ActiveOrdersListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveOrdersListShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveOrdersListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
