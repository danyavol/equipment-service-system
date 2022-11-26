import { Component } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
    selector: 'ess-analytics-shell',
    templateUrl: './analytics-shell.component.html',
    styleUrls: ['./analytics-shell.component.scss']
})
export class AnalyticsShellComponent {
    analyticsData$ = this.analyticsService.getAnalyticsData();

    constructor(private analyticsService: AnalyticsService) { }
}
