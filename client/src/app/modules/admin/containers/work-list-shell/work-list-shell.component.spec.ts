import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkListShellComponent } from './work-list-shell.component';

describe('WorkListShellComponent', () => {
  let component: WorkListShellComponent;
  let fixture: ComponentFixture<WorkListShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkListShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkListShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
