import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrderShellComponent } from './edit-order-shell.component';

describe('EditOrderShellComponent', () => {
  let component: EditOrderShellComponent;
  let fixture: ComponentFixture<EditOrderShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOrderShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditOrderShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
