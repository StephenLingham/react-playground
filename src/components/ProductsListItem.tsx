import { connect } from 'react-redux';
import { Button } from './Button';
import { deleteProduct } from '../redux/products';

function ProductsListItemComponent(props: any) {
  return (
    <li style={itemStyle}>
      <Button text={'X'} clickHandler={() => props.deleteProduct(props.product)} style={buttonStyles} />
      <span>{props.product.name}</span>
    </li>
  );
}

function mapStateToProps(state: any) {
  return {
    products: state.products
  }
}

const mapDispatchToProps = {
  deleteProduct
}

export const ProductListItem = connect(mapStateToProps, mapDispatchToProps)(ProductsListItemComponent);

const buttonStyles = {
  backgroundColor: 'red',
  display: 'inline',
  marginRight: '0.2em'
};

const itemStyle = {
  marginBottom: '0.2em'
};
