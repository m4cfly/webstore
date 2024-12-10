import PropTypes from "prop-types";

const ProductItem = ({ product, addToCart }) => {
  return (
    <li className="product-item">
      <div>
        <h3>{product.name}</h3>
        <p>{product.price} kr</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </li>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductItem;
