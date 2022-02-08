import { Product } from '../models/Product';
import { createAction, PayloadAction } from '@reduxjs/toolkit';

const AddProduct = 'ADD_PRODUCT';
const DeleteProduct = 'DELETE_PRODUCT';

export function productsReducer(
  state: Product[] = [],
  action: PayloadAction<Product>
): Product[] {
  switch (action.type) {
    case AddProduct:
      return reduceAddProduct(state, action.payload);
    case DeleteProduct:
      return reduceDeleteProduct(state, action.payload);
    default:
      return state;
  }
}

function reduceAddProduct(products: Product[], productToAdd: Product) {
  return [...products, productToAdd];
}

function reduceDeleteProduct(products: Product[], productToDelete: Product) {
  return products.filter(
    (product: Product) => product.id !== productToDelete?.id
  );
}

export const addProduct = createAction<Product>(AddProduct);

export const deleteProduct = createAction<Product>(DeleteProduct);
