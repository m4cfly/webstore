import PropTypes from "prop-types";
import ProductItem from "./ProductItem";

const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Products</h1>
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;
