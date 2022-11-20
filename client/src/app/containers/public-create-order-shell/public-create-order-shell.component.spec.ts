import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicCreateOrderShellComponent } from './public-create-order-shell.component';

describe('PublicCreateOrderShellComponent', () => {
  let component: PublicCreateOrderShellComponent;
  let fixture: ComponentFixture<PublicCreateOrderShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicCreateOrderShellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicCreateOrderShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
