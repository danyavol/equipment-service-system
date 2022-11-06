import { Component, Input, OnInit } from '@angular/core';
import { Work } from '../../interfaces/work.interface';

@Component({
    selector: 'ess-work-list-table',
    templateUrl: './work-list-table.component.html',
    styleUrls: ['./work-list-table.component.scss']
})
export class WorkListTableComponent implements OnInit {

    @Input() work: Work[] = [];

    cols: { field: keyof Work, header: string }[] = [
        { field: 'title', header: 'Название' },
        { field: 'cost', header: 'Стоимость' },
    ];

    constructor() { }

    ngOnInit(): void {
    }

    workType(work: Work) {
        return work;
    }
}
