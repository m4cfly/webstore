import PropTypes from "prop-types";

const Cart = ({ cart, removeFromCart }) => {
  // Calculate total quantity and total price
  const { totalQuantity, totalPrice } = cart.reduce(
    (acc, item) => {
      acc.totalQuantity += 1; // Each item adds 1 to the quantity
      acc.totalPrice += item.price; // Add item price to total
      return acc;
    },
    { totalQuantity: 0, totalPrice: 0 } // Initial values
  );

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Qu</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.price} kr</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            <strong>Total Quantity:</strong> {totalQuantity} <br />
            <strong>Total Price:</strong> {totalPrice} kr
          </div>
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
