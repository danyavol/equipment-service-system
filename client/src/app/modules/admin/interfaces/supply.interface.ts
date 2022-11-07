import { FormControl } from "@angular/forms";

export interface Supply {
    id: string;
    title: string;
    pieceCost: number;
    totalAmount: number;
    availableAmount: number;
    supplyDate: string;
}

export interface SupplyForm {
    title: FormControl<string>;
    pieceCost: FormControl<number | null>;
    totalAmount: FormControl<number>;
}
