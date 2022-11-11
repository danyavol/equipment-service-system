import { TuiComparator } from "@taiga-ui/addon-table";

export interface ColumnConfig<T extends Record<string, any>> {
    columnName: string;
    title?: string;
    sorting?: boolean | TuiComparator<T>;
}
