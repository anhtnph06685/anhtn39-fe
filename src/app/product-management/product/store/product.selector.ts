import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductSate } from './product.reducer';

export const productSelector = createFeatureSelector<ProductSate>('productStore');

export const selectProductList = createSelector(
    productSelector,
    state => state.productList
);
export const selectLoadingState = createSelector(
    productSelector,
    state => state.isLoading
);

//save

export const selectSaveProduct = createSelector(
    productSelector,
    state => state.productList
);
export const selectUpdateProduct = createSelector(
    productSelector,
    state => state.productList
)

//upload table

export const selectUploadTable = createSelector(
    productSelector,
    state => state.productList
)