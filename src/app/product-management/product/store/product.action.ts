import {createAction,props} from '@ngrx/store';

export const loadListProduct = createAction(
    '[API] load list product',
    props<{payload:any}>()
);
export const loadListProductSuccess =createAction(
    '[API] load list product success',
    props<{response :any}>()
);
export const loadListProductFailure = createAction(
    '[API] load list product failure',
    props<{error : any}>()
);

// save
export const  saveProduct = createAction(
    '[API] save Product',
    props <{payload :any}>()
);
export const saveProductSuccess = createAction(
    '[API] save product Success',
    props<{response :any}>()
);
export const saveProductFailure = createAction(
    '[API] save product failure',
    props<{error  : any}>()
);

// update product
export const updateProduct = createAction(
    '[API] update product',
    props<{payload: any}>()
);

export const updateProductSuccess = createAction(
    '[API] update product success ',
    props<{response : any}>()
);
export const updateProductFailure = createAction(
    '[API] update product failure',
    props<{error : any}>()
)