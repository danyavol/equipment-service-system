import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSupplyShellComponent } from './edit-supply-shell.component';

describe('EditSupplyComponent', () => {
  let component: EditSupplyShellComponent;
  let fixture: ComponentFixture<EditSupplyShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSupplyShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSupplyShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
