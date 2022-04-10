import { connect } from 'react-redux';
import { Product } from '../../models/Product';
import { RootState } from '../../redux/rootReducer';
import { ProductsListItem } from './ProductsListItem';

type Props = { products: Product[] };

function ProductsListComponent(props: Props) {
  return (
    <>
      <ul style={listStyles}>
        {props.products.map((product: Product) => (
          <ProductsListItem key={product.id.toString()} product={product} />
        ))}
      </ul>
    </>
  );
}

// delete this?
function mapStateToProps(state: RootState) {
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
