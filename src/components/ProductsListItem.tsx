import { connect } from 'react-redux';
import { Button } from './Button';
import { deleteProduct, DeleteProductCreatorAction } from '../redux/products';
import { Product } from '../models/Product';

type Props = {
  product: Product;
  deleteProduct: DeleteProductCreatorAction;
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

function mapStateToProps(state: any) {
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
