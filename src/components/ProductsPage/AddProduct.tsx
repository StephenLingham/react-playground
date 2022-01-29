import { Button } from '../Button';
import { useState } from 'react';
import { Product } from '../../models/Product';
import { connect } from 'react-redux';
import { addProduct, ProductActionCreator } from '../../redux/products';

function AddProductComponent(props: {
  addProduct: ProductActionCreator;
}): JSX.Element {
  const [productName, setProductName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={productName}
        placeholder="Enter product name"
        onChange={handleChange}
      />
      <Button text="Add" clickHandler={handleClick} />
    </div>
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setProductName(event.target.value);
  }

  function handleClick() {
    if (productName === '') {
      alert('Please enter a name for the product');

      return;
    }

    props.addProduct(new Product(productName));
    setProductName('');
  }
}

const mapDispatchToProps = {
  addProduct,
};

export const AddProduct = connect(
  null,
  mapDispatchToProps
)(AddProductComponent);
