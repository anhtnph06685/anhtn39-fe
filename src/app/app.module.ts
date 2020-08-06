import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store, StoreModule } from '@ngrx/store';
import { productReducer } from './product-management/product/store/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffect } from './product-management/product/store/product.effect';
import { ProductService } from './product-management/product/service/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ManagerComponent } from './product-management/manager/managements/manager.component';
import { ProductFromComponent } from './product-management/product/components/product-from/product-from.component';
import { ProductListComponent } from './product-management/product/components/product-list/product-list.component';
import { ProductDialogComponent } from './product-management/product/components/product-dialog/product-dialog.component';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS, MAT_DIALOG_DATA} from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms' ;
import { ProductDialogUpdateComponent } from './product-management/product/components/product-dialog-update/product-dialog-update.component';
import { ProductPageComponent } from './product-management/product/containers/product-page/product-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    ProductFromComponent,
    ProductListComponent,
    ProductDialogComponent,
    ProductDialogUpdateComponent,
    ProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({productStore : productReducer}),
    EffectsModule.forRoot([ProductEffect])
  ],
  providers: [ProductService,{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
  {provide: MAT_DIALOG_DATA,useValue:{}}
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    ProductDialogComponent,
    ProductDialogUpdateComponent
  ]
})
export class AppModule { }
