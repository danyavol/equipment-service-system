import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicOrderFormComponent } from './basic-order-form.component';

describe('BasicOrderFormComponent', () => {
  let component: BasicOrderFormComponent;
  let fixture: ComponentFixture<BasicOrderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicOrderFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicOrderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
