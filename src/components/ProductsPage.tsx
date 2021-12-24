import { AddProduct } from './AddProduct';
import { NavBar } from './NavBar';
import { ProductsList } from './ProductsList';

export function ProductsPage(): JSX.Element {
  return (
    <>
      <NavBar />
      <AddProduct />
      <ProductsList />
    </>
  );
}
