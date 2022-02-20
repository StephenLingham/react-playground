import { connect } from 'react-redux';
import { Button } from '../Button';
import { deleteProduct } from '../../redux/products';
import { Product } from '../../models/Product';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState } from '../../redux/rootReducer';

type Props = {
  product: Product;
  deleteProduct: ActionCreatorWithPayload<Product>;
};

function ProductsListItemComponent(props: Props) {
  return (
    <li style={itemStyle}>
      <Button
        text={'X'}
        clickHandler={() => props.deleteProduct(props.product)}
        style={buttonStyles}
      />
      <span>{props.product.name}</span>
    </li>
  );
}

function mapStateToProps(state: RootState) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  deleteProduct,
};

export const ProductsListItem = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsListItemComponent);

const buttonStyles: React.CSSProperties = {
  backgroundColor: 'red',
  display: 'inline',
  marginRight: '0.2em',
};

const itemStyle: React.CSSProperties = {
  marginBottom: '0.2em',
};
