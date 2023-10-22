import { useContext } from "react";

import "./checkout.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      {cartItems.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default Checkout;
