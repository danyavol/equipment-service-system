import { Component, Input } from '@angular/core';
import { ColumnConfig } from 'src/app/shared/interfaces/table.interface';
import { Work } from '../../interfaces/work.interface';

@Component({
    selector: 'ess-work-list-table',
    templateUrl: './work-list-table.component.html',
    styleUrls: ['./work-list-table.component.scss']
})
export class WorkListTableComponent {
    @Input() work: Work[] = [];

    readonly columns: ColumnConfig<Work>[] = [
        { columnName: 'title', title: 'Название' },
        { columnName: 'cost', title: 'Стоимость' },
    ];
}
