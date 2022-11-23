import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TuiContextWithImplicit, TuiIdentityMatcher, TuiStringHandler } from '@taiga-ui/cdk';
import { OrderStatus } from 'src/app/shared/constants/status.constant';
import { Supply as FullSupply } from '../../interfaces/supply.interface';
import { Work as FullWork } from '../../interfaces/work.interface';
import { OrderFormConfig, PartialSupply, PartialWork } from './order-form.config';


@Component({
  selector: 'ess-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
    @Input() form?: FormGroup<OrderFormConfig>;
    @Input() supplies: PartialSupply[] = [];
    @Input() works: PartialWork[] = [];

    readonly statuses = Object.values(OrderStatus);

    readonly stringifySupply: TuiStringHandler<PartialSupply | TuiContextWithImplicit<PartialSupply>> = item =>
        `title` in item ? item.title : item.$implicit.title;

    readonly identityMatcherSupply: TuiIdentityMatcher<PartialSupply> = (supply1, supply2) =>
        supply1.id === supply2.id;

    readonly stringifyWork: TuiStringHandler<PartialWork | TuiContextWithImplicit<PartialWork>> = item =>
        `title` in item ? item.title : item.$implicit.title;

    readonly identityMatcherWork: TuiIdentityMatcher<PartialWork> = (work1, work2) =>
        work1.id === work2.id;
}
