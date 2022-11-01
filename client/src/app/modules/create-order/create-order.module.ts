import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateOrderComponent } from './create-order.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateOrderApiService } from './create-order-api.service';



@NgModule({
  declarations: [
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CreateOrderComponent
  ],
  providers: [CreateOrderApiService]
})
export class CreateOrderModule { }
