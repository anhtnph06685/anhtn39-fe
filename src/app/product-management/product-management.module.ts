import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductManagementRoutingModule } from './product-management-routing.module';
import { ManagerComponent } from './manager/managements/manager.component';



@NgModule({
  declarations: [
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ProductManagementRoutingModule
  ]
})
export class ProductManagementModule { }
