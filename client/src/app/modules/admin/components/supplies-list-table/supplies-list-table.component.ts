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

    readonly columns: ColumnConfig<Supply>[] = [
        { columnName: 'title', title: 'Название' },
        { columnName: 'pieceCost', title: 'Цена за шт.' },
        { columnName: 'availableAmount', title: 'В наличии' },
        { columnName: 'supplyDate', title: 'Дата поставки' },
        { columnName: 'actions', sorting: false }
    ];
}
