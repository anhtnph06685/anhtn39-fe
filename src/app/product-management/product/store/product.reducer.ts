import { Product } from '../model/product.model';
import { createReducer,on,Action } from '@ngrx/store';
import * as productAction from './product.action';

export interface ProductSate{
    productList:Product[];
    isLoading:Boolean;
    isSaving:  Boolean;
    error:any;
    productLoadTable:Product;
}
const initState: ProductSate = {
    productList:[],
    isLoading:false,
    isSaving:false,
    error:null,
    productLoadTable:null
};
const reducer = createReducer(
    initState,
    on(
        productAction.loadListProduct,
        (state,{payload})=> ({
            ...state,
            isLoading:true
        })
    ),
    on(
        productAction.loadListProductSuccess,
        (state, {response})=>({
            ...state,
            isLoading:false,
            productList:response.body.products
        })
    ),
    on(
        productAction.loadListProductFailure,
        (state,{error}) => ({
            ...state,
            isLoading:false,
            error:error
        })
    ),


    //save product

    on(
        productAction.saveProduct,
        (state,{payload}) =>({
            ...state,
            isLoading:true
        })
    ),
    on(
        productAction.saveProductSuccess,
        (state,{response}) =>({
            ...state,
            isLoading:true,
            productList:[...state.productList,response.body.product],
            productLoadTable: response.body.product
        })
    ),

    //update
    on(
        productAction.updateProduct,
        (state,{payload}) =>({
            ...state,
            isLoading:true
        })
    ),
    on(
        productAction.updateProductSuccess,
        (state,{response}) => {
            const temp = response.body.product;
            const productList = state.productList.map(el => el.id == temp.id ? temp : el);
            return{
                ...state,
                isLoading:false,
                productList:productList,
                productLoadTable: temp
            }
            
        }
    )
);
export function productReducer(state: ProductSate, action : Action){
    return reducer(state,action);
}