import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderStatus } from 'src/app/shared/constants/status.constant';
import { Supply } from '../../interfaces/supply.interface';
import { Work } from '../../interfaces/work.interface';
import { OrderFormConfig } from './order-form.config';

@Component({
  selector: 'ess-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.scss']
})
export class OrderFormComponent {
    @Input() form?: FormGroup<OrderFormConfig>;
    @Input() supplies: Pick<Supply, 'id' | 'title' | 'pieceCost'>[] = [
        { id: "3b8a64e4-0e42-4fef-a8e0-6fc39f40668e", title: "Лицензионный ключ Windows 10. Лицензионный ключ Windows 10. Лицензионный ключ Windows 10.", pieceCost: 30 },
        { id: "10ab9552-bc29-4212-b67f-e58e093fd663", title: "Аккумулятор телефона 4000mAh", pieceCost: 40 },
        { id: "fa0b7564-beb0-49d7-972f-3a4a7fafd0e0", title: "Экрана телефона Samsung Galaxy", pieceCost: 60 },
    ];
    @Input() works: Pick<Work, 'id' | 'title' | 'cost'>[] = [
        { id: "a28be35f-50ce-4cbb-8eca-24d5e9758ca3", title: "Ремонт электроники 1 категории", cost: 50 },
        { id: "ccafeeda-cd9d-46df-99f3-f5c28149d876", title: "Сборка и разборка ноутбука", cost: 15 },
    ]

    statuses = Object.values(OrderStatus);
}
