import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductSate } from '../../store/product.reducer';
import { Store, select } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import * as productAction from '../../store/product.action';
import { selectUpdateProduct } from '../../store/product.selector';

@Component({
  selector: 'app-product-dialog-update',
  templateUrl: './product-dialog-update.component.html',
  styleUrls: ['./product-dialog-update.component.css']
})
export class ProductDialogUpdateComponent implements OnInit {
  title: any;
  productForm: FormGroup;
  product$: Observable<Product[]>;
  @Input() element: any;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ProductSate>,
     private dialog : MatDialogRef<ProductDialogUpdateComponent>,
     @Inject(MAT_DIALOG_DATA) private dialogData:any
  ) {
    this.productForm = this.formBuilder.group({
      id:[],
      name: ["", Validators.required],
      code: ["", Validators.required],
      quantity: ["", Validators.required],
      price: ["", Validators.required],
    });
   }

  ngOnInit() {
    this.title ="Cập nhật sản phẩm";
    this.product$= this.store.pipe(select(selectUpdateProduct));
    this.product$.subscribe(res => console.log("data log",res));
    this.productForm.patchValue({
      id:this.dialogData.target.id,
      code: this.dialogData.target.code,
      name: this.dialogData.target.name,
      quantity: this.dialogData.target.quantity,
      price:this.dialogData.target.price
    })
  }
  save() {
    const data = {
      body: {
        product: {
          id:this.productForm.value.id,
          name: this.productForm.value.name,
          code: this.productForm.value.code,
          quantity: this.productForm.value.quantity,
          price: this.productForm.value.price,
        },
      },
    };
    this.store.dispatch(productAction.updateProduct({ payload: data }));
    this.dialog.close(ProductDialogUpdateComponent);
  }
}
