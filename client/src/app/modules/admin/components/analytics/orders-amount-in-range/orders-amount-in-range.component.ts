import { Component, Input } from '@angular/core';
import { OrderAmountInRange } from '../../../interfaces/analytics.interface';

@Component({
    selector: 'ess-orders-amount-in-range',
    templateUrl: './orders-amount-in-range.component.html',
    styleUrls: ['./orders-amount-in-range.component.scss']
})
export class OrdersAmountInRangeComponent {
    @Input() set data(data: OrderAmountInRange) {
        this.values = [data.lessThen50, data.from50to100, data.from100to200, data.greaterThen200];
        this.total = this.values.reduce((sum, value) => sum + value, 0);
    };

    readonly labels = [`< 50р`, `50р - 100р`, `100р - 200р`, `> 200р`];

    total: number = 0;
    values: number[] = [];

    index = NaN;

    get value(): number | string {
        return Number.isNaN(this.index) ? this.total : this.values[this.index];
    }

    get label(): string {
        return Number.isNaN(this.index) ? 'Всего выполненных заявок' : this.labels[this.index];
    }
}
