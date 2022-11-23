import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TuiContextWithImplicit, TuiIdentityMatcher, TuiStringHandler } from '@taiga-ui/cdk';
import { OrderStatus } from 'src/app/shared/constants/status.constant';
import { Supply as FullSupply } from '../../interfaces/supply.interface';
import { Work as FullWork } from '../../interfaces/work.interface';
import { OrderFormConfig } from './order-form.config';

type Supply = Pick<FullSupply, 'id' | 'title' | 'pieceCost'>;
type Work = Pick<FullWork, 'id' | 'title' | 'cost'>;
@Component({
  selector: 'ess-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
    @Input() form?: FormGroup<OrderFormConfig>;
    @Input() supplies: Supply[] = [];
    @Input() works: Work[] = [];

    readonly statuses = Object.values(OrderStatus);

    readonly stringifySupply: TuiStringHandler<Supply | TuiContextWithImplicit<Supply>> = item =>
        `title` in item ? item.title : item.$implicit.title;

    readonly identityMatcherSupply: TuiIdentityMatcher<Supply> = (supply1, supply2) =>
        supply1.id === supply2.id;

    readonly stringifyWork: TuiStringHandler<Work | TuiContextWithImplicit<Work>> = item =>
        `title` in item ? item.title : item.$implicit.title;

    readonly identityMatcherWork: TuiIdentityMatcher<Work> = (work1, work2) =>
        work1.id === work2.id;
}
