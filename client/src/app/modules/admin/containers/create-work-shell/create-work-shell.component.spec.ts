import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkShellComponent } from './create-work-shell.component';

describe('CreateWorkShellComponent', () => {
  let component: CreateWorkShellComponent;
  let fixture: ComponentFixture<CreateWorkShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWorkShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
