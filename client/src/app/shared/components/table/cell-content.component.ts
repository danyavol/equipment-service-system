import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    selector: '[essCell]',
})
export class CellContentDirective<T extends Record<keyof T, any>> {
    @Input() essCell?: keyof T; // Column name

    constructor(public templateRef: TemplateRef<unknown>) {}
}
