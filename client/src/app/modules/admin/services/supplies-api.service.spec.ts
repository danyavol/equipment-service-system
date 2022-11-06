import { TestBed } from '@angular/core/testing';

import { SuppliesApiService } from './supplies-api.service';

describe('SuppliesApiService', () => {
    let service: SuppliesApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(SuppliesApiService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
