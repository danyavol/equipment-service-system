import { Component } from '@angular/core';
import { WorksApiService } from '../../services/works-api.service';

@Component({
    selector: 'ess-work-list-shell',
    templateUrl: './work-list-shell.component.html',
    styleUrls: ['./work-list-shell.component.scss']
})
export class WorkListShellComponent {
    work$ = this.apiService.getAllWork();

    constructor(private apiService: WorksApiService) { }
}
