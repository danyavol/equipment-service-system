import { Component, Input } from '@angular/core';

export type InfoCardColor = 'success' | 'danger' | 'help' | 'warning';

@Component({
    selector: 'ess-info-card',
    templateUrl: './info-card.component.html',
    styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent {
    @Input() color?: InfoCardColor;
    @Input() title: string = '';
    @Input() value: number | string = '';
    @Input() secondValue?: number | string;
}
