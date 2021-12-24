import { connect } from 'react-redux';
import { Product } from '../models/Product';
import { ProductListItem } from './ProductsListItem';

type Props = { products: Product[] };

function ProductsListComponent(props: Props) {
  return (
    <>
      <h4 style={titleStyles}>Products</h4>
      <ul style={listStyles}>
        {props.products.map((product: Product) => (
          <ProductListItem key={product.id.toString()} product={product} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state: any) {
  return {
    products: state.products,
  };
}

export const ProductsList = connect(mapStateToProps)(ProductsListComponent);

const listStyles = {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
};

const titleStyles = {
  margin: 0,
};
