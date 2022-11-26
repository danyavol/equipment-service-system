import { Component, Input } from '@angular/core';
import { ActiveOrdersAmount } from '../../../interfaces/analytics.interface';

@Component({
    selector: 'ess-active-orders-amount',
    templateUrl: './active-orders-amount.component.html',
    styleUrls: ['./active-orders-amount.component.scss']
})
export class ActiveOrdersAmountComponent {
    @Input() set data(data: ActiveOrdersAmount) {
        this.values = [data.newOrders, data.readyForWork, data.inProcess, data.resolved];
        this.total = this.values.reduce((sum, value) => sum + value, 0);
    };

    readonly labels = [`Новые`, `Готовые к работе`, `В работе`, `Готовые к выдаче`];

    total: number = 0;
    values: number[] = [];

    index = NaN;

    get value(): number | string {
        return Number.isNaN(this.index) ? this.total : this.values[this.index];
    }

    get label(): string {
        return Number.isNaN(this.index) ? `Всего` : this.labels[this.index];
    }
}
