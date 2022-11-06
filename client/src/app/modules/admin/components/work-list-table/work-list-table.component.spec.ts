import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkListTableComponent } from './work-list-table.component';

describe('WorkListTableComponent', () => {
  let component: WorkListTableComponent;
  let fixture: ComponentFixture<WorkListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkListTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
