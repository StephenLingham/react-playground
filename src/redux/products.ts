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
) {
  switch (action.type) {
    case AddProduct:
      return reduceAddProduct(state, action.payload);
    case DeleteProduct:
      return reduceDeleteProduct(state, action.payload);
    default:
      return state;
  }
}

export type AddProductActionCreator = (product: Product) => ProductAction;

export const addProduct: AddProductActionCreator = function addProduct(
  product: Product
): ProductAction {
  return {
    type: AddProduct,
    payload: product,
  };
};

export function deleteProduct(product: Product): ProductAction {
  return {
    type: DeleteProduct,
    payload: product,
  };
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
