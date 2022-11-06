import { Component, OnInit } from '@angular/core';
import { SuppliesApiService } from '../../services/supplies-api.service';

@Component({
    selector: 'ess-supplies-list-shell',
    templateUrl: './supplies-list-shell.component.html',
    styleUrls: ['./supplies-list-shell.component.scss']
})
export class SuppliesListShellComponent implements OnInit {

    supplies$ = this.apiService.getAllSupplies();

    constructor(private apiService: SuppliesApiService) { }

    ngOnInit(): void {
    }

}