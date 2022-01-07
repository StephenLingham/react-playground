import { Action } from './Action';
import { Product } from '../models/Product';

const AddProduct = 'ADD_PRODUCT';
const DeleteProduct = 'DELETE_PRODUCT';

type ProductsState = { products: Product[] };

const initialState: ProductsState = {
  products: [],
};

interface ProductAction extends Action<Product> {
  payload: Product;
}

export function productsReducer(
  state: ProductsState = initialState,
  action: ProductAction
): ProductsState {
  switch (action.type) {
    case AddProduct:
      return reduceAddProduct(state, action.payload);
    case DeleteProduct:
      return reduceDeleteProduct(state, action.payload);
    default:
      return state;
  }
}

function reduceAddProduct(state: ProductsState, productToAdd: Product) {
  return { ...state, products: [...state.products, productToAdd] };
}

function reduceDeleteProduct(state: ProductsState, productToDelete: Product) {
  return {
    ...state,
    products: state.products.filter(
      (product: Product) => product.id !== productToDelete?.id
    ),
  };
}

export type ProductActionCreator = (product: Product) => ProductAction;

export const addProduct: ProductActionCreator = function (
  product: Product
): ProductAction {
  return {
    type: AddProduct,
    payload: product,
  };
};

export const deleteProduct: ProductActionCreator = function (
  product: Product
): ProductAction {
  return {
    type: DeleteProduct,
    payload: product,
  };
};
