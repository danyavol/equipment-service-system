import { Component, Input } from '@angular/core';
import { TuiSizeL, TuiSizeS } from '@taiga-ui/core';
import { OrderStatus, statusName } from '../../constants/status.constant';

@Component({
    selector: 'ess-order-status-badge',
    templateUrl: './order-status-badge.component.html',
    styleUrls: ['./order-status-badge.component.scss']
})
export class OrderStatusBadgeComponent{
    @Input() status?: OrderStatus;
    @Input() size: TuiSizeS | TuiSizeL = 'm';

    statusName = statusName;

    get severity() {
        switch (this.status) {
            case OrderStatus.New:
                return 'success-color';
            case OrderStatus.Cancel:
                return 'danger-color';
            case OrderStatus.ReadyForWork:
                return 'warning-color';
            case OrderStatus.InProcess:
                return 'active-color';
            case OrderStatus.Resolved:
                return 'help-color';
            case OrderStatus.Done:
                return 'secondary-color';
            default:
                return '';
        }
    }
}
