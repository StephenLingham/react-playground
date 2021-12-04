import { Product } from '../models/Product';

const initialState = {
  products: []
}

export function productsReducer(state: any = initialState, action: any) {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.product] }
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter((product: Product) => product.id !== action.product.id) }
    default:
      return state;
  }
}

export function addProduct(product: Product) {
  return {
    type: 'ADD_PRODUCT',
    product
  }
}

export function deleteProduct(product: Product) {
  return {
    type: 'DELETE_PRODUCT',
    product
  }
}
