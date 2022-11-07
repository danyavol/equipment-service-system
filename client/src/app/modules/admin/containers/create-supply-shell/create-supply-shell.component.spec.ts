import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSupplyShellComponent } from './create-supply-shell.component';

describe('CreateSupplyShellComponent', () => {
    let component: CreateSupplyShellComponent;
    let fixture: ComponentFixture<CreateSupplyShellComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateSupplyShellComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(CreateSupplyShellComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
