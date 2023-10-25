import { useContext } from "react";

import {CheckoutItemContainer, ImgContainer, ImgStyle, ItemDetailes, Quantity, Arrow, Value, RemoveButton } from "./checkout-item.styles";

import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const { removeItemFromCart, increasItemQuantity, decreasItemQuantity } =
    useContext(CartContext);

  const decreasItemHandler = () => decreasItemQuantity(cartItem);
  const increasItemHandler = () => increasItemQuantity(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImgContainer>
        <ImgStyle src={imageUrl} alt={name} />
      </ImgContainer>
      <ItemDetailes>{name}</ItemDetailes>
      <Quantity>
        <Arrow onClick={decreasItemHandler}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={increasItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <ItemDetailes>{price}</ItemDetailes>
      <RemoveButton onClick={removeItemHandler}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
