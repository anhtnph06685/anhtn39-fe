import { Inject, Injectable } from "@angular/core";
import { Product } from '../model/product.model';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import * as productAction from './product.action';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProductService } from '../service/product.service';
import { of } from 'rxjs';



@Injectable()
export class ProductEffect{
    constructor(
        private service: ProductService,
        private action$: Actions,
        private router : Router
    ){

    }
    loadListProduct = createEffect(() =>{
        return this.action$.pipe(
            ofType(productAction.loadListProduct),
            switchMap(
                action => this.service.loadListProduct(action.payload).pipe(
                    map(res =>{
                        if(res.responseCode !=200){
                            console.log("failure");
                            return productAction.loadListProductFailure({error:res});
                        }else{
                            console.log("succsess");
                            return productAction.loadListProductSuccess({response:res});
                        }
                    }),
                    catchError(err => of(productAction.loadListProductFailure({error: err})))
                )
            )
        )
    })

    // save product

    saveProduct$ =  createEffect(() =>{
       return this.action$.pipe(
            ofType(productAction.saveProduct),
            switchMap(action => this.service.saveProduct(action.payload).pipe(
                map(res =>{
                    if(res.responseCode !='200'){
                        console.log("save  failure");
                        return productAction.saveProductFailure({error:res})
                    }else{
                        console.log("save success");
                        return productAction.saveProductSuccess({response:res})
                    }
                }),
                catchError(err => of(productAction.saveProductFailure({error:err})))
            ))
        )
    })

    //update product

    updateProduct$ = createEffect(() =>{
        return this.action$.pipe(
            ofType(productAction.updateProduct),
            switchMap(action => this.service.updateProduct(action.payload).pipe(
                map(res =>{
                    if(res.responseCode !=200){
                        console.log("update product failure");
                        return  productAction.updateProductFailure({error:res})
                    }else{
                        console.log("update product sucess");
                        return productAction.updateProductSuccess({response:res})
                    }
                }),
                catchError(err => of(productAction.updateProductFailure({error: err})))
            ))
        )
    })
}