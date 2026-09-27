import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function CartItem() {
  const cart = useSelector((state) => state.cart.items);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Navbar />

      <div style={{ padding: 30 }}>
        <h1>Shopping Cart</h1>

        {cart.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid gray",
              padding: 15,
              marginBottom: 15,
            }}
          >
            <h3>{item.name}</h3>

            <p>Unit Price: ${item.price}</p>

            <p>Quantity: {item.quantity}</p>

            <p>Total: ${item.price * item.quantity}</p>

            <button>+</button>

            <button>-</button>

            <button>Delete</button>
          </div>
        ))}

        <h2>Total: ${total}</h2>

        <button>Continue Shopping</button>

        <button>Checkout</button>
      </div>
    </>
  );
}

export default CartItem;
