import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductFromComponent } from './components/product-from/product-from.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ManagerComponent } from '../manager/managements/manager.component';

@NgModule({
  declarations: [
    ProductFromComponent,
    ProductListComponent,
    ManagerComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
  ]
})
export class ProductModule { }
