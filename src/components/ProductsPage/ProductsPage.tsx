import { AddProduct } from './AddProduct';
import { NavBar } from '../NavBar';
import { ProductsList } from './ProductsList';

export function ProductsPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <h1>Products</h1>
      <AddProduct />
      <ProductsList />
    </>
  );
}
