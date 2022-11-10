import { Component, Input } from '@angular/core';
import { ColumnConfig } from 'src/app/shared/interfaces/table.interface';
import { Supply } from '../../interfaces/supply.interface';

@Component({
    selector: 'ess-supplies-list-table',
    templateUrl: './supplies-list-table.component.html',
    styleUrls: ['./supplies-list-table.component.scss']
})
export class SuppliesListTableComponent {
    @Input() supplies: Supply[] = [];

    columns: ColumnConfig<Supply>[] = [
        { columnName: 'title', title: 'Название', sorting: true },
        { columnName: 'pieceCost', title: 'Цена за шт.', sorting: true },
        { columnName: 'availableAmount', title: 'В наличии', sorting: true },
        { columnName: 'supplyDate', title: 'Дата поставки', sorting: true },
    ];

    supplyType(supply: Supply) {
        return supply;
    }
}
