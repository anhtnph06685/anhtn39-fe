import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import {
  FormGroup,
  FormBuilder,
  RequiredValidator,
  Validators,
} from "@angular/forms";
import { Store, select } from "@ngrx/store";
import { ProductSate } from "../../store/product.reducer";
import * as productAction from "../../store/product.action";
import { selectSaveProduct } from "../../store/product.selector";
import { Product } from "../../model/product.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-product-dialog",
  templateUrl: "./product-dialog.component.html",
  styleUrls: ["./product-dialog.component.css"],
})
export class ProductDialogComponent implements OnInit {
  title: any;
  productForm: FormGroup;
  product: Observable<Product[]>;
  constructor(
    private formBuilder: FormBuilder,
    private store: Store<ProductSate>,
     private dialog : MatDialogRef<ProductDialogComponent>
  ) //  private dialog : MatDialogRef<ProductDialogComponent>,
  //  @Inject(MAT_DIALOG_DATA) private data:any
  {
    this.productForm = this.formBuilder.group({
      name: ["", Validators.required],
      code: ["", Validators.required],
      quantity: ["", Validators.required],
      price: ["", Validators.required],
    });

    this.product = this.store.pipe(select(selectSaveProduct));
  }
  ngOnInit(): void {
    this.title = "Thêm mới sản phẩm";
    this.product.subscribe((res) => console.log("save product", res));
  }
  save() {
    const data = {
      body: {
        product: {
          name: this.productForm.value.name,
          code: this.productForm.value.code,
          quantity: this.productForm.value.quantity,
          price: this.productForm.value.price,
        },
      },
    };
    this.store.dispatch(productAction.saveProduct({ payload: data }));
    this.dialog.close(ProductDialogComponent);
  }
}
