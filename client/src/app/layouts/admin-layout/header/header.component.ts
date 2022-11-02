import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'ess-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    items: MenuItem[] = [
        {
            label: 'Заявки',
            icon: 'pi pi-fw pi-book',
            items: [
                {
                    label: 'Все заявки',
                    icon: 'pi pi-fw pi-list',
                    routerLink: '/admin/orders',
                    routerLinkActiveOptions: { exact: true }
                },
                {
                    separator: true
                },
                {
                    label: 'Создать заявку',
                    icon: 'pi pi-fw pi-plus'
                },
            ]
        },
        {
            label: 'Запасы',
            icon: 'pi pi-fw pi-box',
            items: [
                {
                    label: 'Все запасы',
                    icon: 'pi pi-fw pi-list',
                },
                {
                    separator: true
                },
                {
                    label: 'Добавить запас',
                    icon: 'pi pi-fw pi-plus'
                },
            ]
        },
        {
            label: 'Услуги',
            icon: 'pi pi-fw pi-bolt',
            items: [
                {
                    label: 'Все услуги',
                    icon: 'pi pi-fw pi-list',
                },
                {
                    separator: true
                },
                {
                    label: 'Добавить услугу',
                    icon: 'pi pi-fw pi-plus'
                },
            ]
        },
        {
            label: 'Выйти',
            icon: 'pi pi-fw pi-sign-out'
        }
    ];

}
