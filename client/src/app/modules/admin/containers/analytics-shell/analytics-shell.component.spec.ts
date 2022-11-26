import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsShellComponent } from './analytics-shell.component';

describe('AnalyticsShellComponent', () => {
  let component: AnalyticsShellComponent;
  let fixture: ComponentFixture<AnalyticsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyticsShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
