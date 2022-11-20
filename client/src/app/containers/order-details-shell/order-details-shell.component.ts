import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetails } from 'src/app/shared/interfaces/order.interface';

@Component({
  selector: 'ess-order-details-shell',
  templateUrl: './order-details-shell.component.html',
  styleUrls: ['./order-details-shell.component.scss']
})
export class OrderDetailsShellComponent implements OnInit {
    orderDetails: OrderDetails;
    totalPrice: number;

    constructor(route: ActivatedRoute) {
        this.orderDetails = route.snapshot.data['order'];
        this.totalPrice = this.getTotalPrice(this.orderDetails);
    }

    ngOnInit(): void {
    }

    getTotalPrice(orderDetails: OrderDetails): number {
        const totalWork = orderDetails.works.reduce((total, work) => total + work.cost, 0);
        const totalSupply = orderDetails.supplies.reduce((total, supply) => total + supply.pieceCost, 0);
        return totalWork + totalSupply;
    }

}
