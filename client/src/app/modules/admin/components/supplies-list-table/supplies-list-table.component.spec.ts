import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesListTableComponent } from './supplies-list-table.component';

describe('SuppliesListTableComponent', () => {
  let component: SuppliesListTableComponent;
  let fixture: ComponentFixture<SuppliesListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuppliesListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuppliesListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
