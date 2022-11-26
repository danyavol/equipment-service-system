import { Component, Input, OnInit } from '@angular/core';
import { TUI_ALWAYS_DASHED, TUI_ALWAYS_NONE } from '@taiga-ui/addon-charts';
import { OrdersAmountPerPeriod } from '../../../interfaces/analytics.interface';

@Component({
    selector: 'ess-orders-amount-per-period',
    templateUrl: './orders-amount-per-period.component.html',
    styleUrls: ['./orders-amount-per-period.component.scss']
})
export class OrdersAmountPerPeriodComponent implements OnInit {
    @Input() set data(data: OrdersAmountPerPeriod) {
        this.values = [data.day, data.week, data.month];

        const maxValue = Math.max(...this.values);
        this.axisYSecondaryLabels = [
            '',
            `${maxValue / 2}`,
            `${maxValue}`,
        ];
    }

    values: number[] = [];
    readonly axisXLabels = [`День`, `Неделя`, `Месяц`];

    axisYSecondaryLabels: string[] = [];

    readonly horizontalLinesHandler = TUI_ALWAYS_DASHED;
    readonly verticalLinesHandler = TUI_ALWAYS_NONE;

    constructor() { }

    ngOnInit(): void {
    }

}
