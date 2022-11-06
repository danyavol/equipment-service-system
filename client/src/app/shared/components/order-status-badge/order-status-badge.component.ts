import { Component, Input } from '@angular/core';
import { OrderStatus, statusName } from '../../constants/status.constant';

@Component({
    selector: 'ess-order-status-badge',
    templateUrl: './order-status-badge.component.html',
    styleUrls: ['./order-status-badge.component.scss']
})
export class OrderStatusBadgeComponent{
    @Input() status?: OrderStatus;

    statusName = statusName;

    get severity() {
        switch (this.status) {
            case OrderStatus.New:
                return 'p-badge-success';
            case OrderStatus.Cancel:
                return 'p-badge-danger';
            case OrderStatus.ReadyForWork:
                return 'p-badge-warning';
            case OrderStatus.InProcess:
                return 'p-badge-info';
            case OrderStatus.Resolved:
                return 'help-color';
            case OrderStatus.Done:
                return 'secondary-color';
            default:
                return '';
        }
    }
}
