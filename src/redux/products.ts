import { Action } from './Action';
import { Product } from '../models/Product';

const AddProduct = 'ADD_PRODUCT';
const DeleteProduct = 'DELETE_PRODUCT';

interface ProductAction extends Action<Product> {
  payload: Product;
}

export function productsReducer(
  state: Product[] = [],
  action: ProductAction
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
