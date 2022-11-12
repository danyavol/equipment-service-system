import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWorkShellComponent } from './edit-work-shell.component';

describe('EditWorkShellComponent', () => {
  let component: EditWorkShellComponent;
  let fixture: ComponentFixture<EditWorkShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditWorkShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditWorkShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
