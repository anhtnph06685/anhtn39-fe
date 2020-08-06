import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ProductSate } from '../../store/product.reducer';
import * as productAction from '../../store/product.action';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { selectProductList } from '../../store/product.selector';
import { ProductService } from '../../service/product.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ProductDialogUpdateComponent } from '../product-dialog-update/product-dialog-update.component';

@Component({
  selector: 'app-product-from',
  templateUrl: './product-from.component.html',
  styleUrls: ['./product-from.component.css']
})
export class ProductFromComponent implements OnInit {
  dialogRef:MatDialogRef<any>;
  productList$:Observable<Product[]>;
  products : Product[];

  @Output() element = new EventEmitter<any>();

  constructor(
    private store : Store<ProductSate>,
    private productService : ProductService,
    public dialog : MatDialog
    
  ) { 
    this.productList$ = this.store.pipe(select(selectProductList));
  }
  openDialog(){
      this.dialogRef = this.dialog.open(ProductDialogComponent,{
        height:'60%',
        width:'50%'
      })
  }
  openDialogUpdate(element : Product){
    // this.dialogRef = this.dialog.open(ProductDialogUpdateComponent,{
    //   height:'60%',
    //     width:'50%'
    // });
    this.element.emit(element);
    console.log("element", element);
  }
  ngOnInit() {
    const payload ={
      body:{
        product:{
          
        }
      }
    }
    this.store.dispatch(productAction.loadListProduct({payload:payload}));
    this.productList$.subscribe(res => console.log("list product:",res));
    this.productService.loadListProduct(payload).subscribe(res => this.products=res);
    console.log("data product",this.products);
  }

}
