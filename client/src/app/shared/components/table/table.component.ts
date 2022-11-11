import { AfterContentInit, Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { TuiComparator, tuiDefaultSort } from '@taiga-ui/addon-table';
import { ColumnConfig } from '../../interfaces/table.interface';
import { CellContentDirective } from './cell-content.component';

interface ParsedColumnConfig<T> {
    columnName: string;
    title: string;
    sorter: TuiComparator<T> | null;
}

@Component({
    selector: 'ess-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})
export class TableComponent<T extends Record<string, any>> implements AfterContentInit {
    @Input() dataset: T[] = [];
    @Input()
    set columns(configs: ColumnConfig<T>[]) {
        this._columns = this.getParsedColumnConfigs(configs);
        this.tableFields = configs.map(config => config.columnName);
    }
    get columns(): ParsedColumnConfig<T>[] {
        return this._columns;
    }

    @ContentChildren(CellContentDirective) cellTemplates?: QueryList<CellContentDirective<T>>;

    tableFields: string[] = [];
    cellTemplatesMap: Map<keyof T, TemplateRef<unknown>> = new Map();

    private _columns: ParsedColumnConfig<T>[] = [];

    ngAfterContentInit(): void {
        this.cellTemplates?.forEach(cellTemplate => {
            if (cellTemplate.essCell)
                this.cellTemplatesMap.set(cellTemplate.essCell, cellTemplate.templateRef);
        });
    }



    private getParsedColumnConfigs(configs: ColumnConfig<T>[]): ParsedColumnConfig<T>[] {
        return configs.map(config => ({
            columnName: config.columnName,
            title: config?.title || '',
            sorter: this.getSorter(config)
        }));
    }

    private getSorter(column: ColumnConfig<T>) {
        const defaultSortFn: TuiComparator<T> = (a: T, b: T) => tuiDefaultSort(a[column.columnName], b[column.columnName]);

        if (column.sorting === undefined) return defaultSortFn;

        if (typeof column.sorting === 'boolean') {
            if (column.sorting) return defaultSortFn;
            else  return null; // No sorting
        }

        return column.sorting; // Custom sorting method
    }

}
