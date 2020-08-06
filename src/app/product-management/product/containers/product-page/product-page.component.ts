import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ProductSate } from '../../store/product.reducer';
import { ProductDialogUpdateComponent } from '../../components/product-dialog-update/product-dialog-update.component';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  element : any;
  constructor(
    private dialog : MatDialog,
    private store  : Store<ProductSate>
  ) { }

  ngOnInit() {
  }

  getElement(data :any){
    this.dialog.open(ProductDialogUpdateComponent, {
      height:'60%',
        width:'50%',
      data: {
        target:data
      }
    })
    this.element=data;
    console.log("element input", data);
  }
}
