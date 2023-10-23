import { useContext } from "react";

import "./checkout-item.styles.scss";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { removeItemFromCart, increasItemQuantity, decreasItemQuantity } =
    useContext(CartContext);

  const decreasItemHandler = () => decreasItemQuantity(cartItem);
  const increasItemHandler = () => increasItemQuantity(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decreasItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increasItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={removeItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
