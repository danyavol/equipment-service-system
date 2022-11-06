import { Component, Input, OnInit } from '@angular/core';
import { Supply } from '../../interfaces/supply.interface';

@Component({
    selector: 'ess-supplies-list-table',
    templateUrl: './supplies-list-table.component.html',
    styleUrls: ['./supplies-list-table.component.scss']
})
export class SuppliesListTableComponent implements OnInit {

    @Input() supplies: Supply[] = [];

    cols: { field: keyof Supply, header: string }[] = [
        { field: 'title', header: 'Название' },
        { field: 'pieceCost', header: 'Цена за шт.' },
        { field: 'availableAmount', header: 'В наличии' },
        { field: 'supplyDate', header: 'Дата поставки' },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    supplyType(supply: Supply) {
        return supply;
    }

}
