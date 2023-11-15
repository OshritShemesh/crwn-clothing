import { useDispatch, useSelector } from "react-redux";

import { increasItemQuantity, decreasItemQuantity, removeItemFromCart } from "../../store/cart/cart.action";

import { selectCartItems } from "../../store/cart/cart.selector";

import {CheckoutItemContainer, ImgContainer, ImgStyle, ItemDetailes, Quantity, Arrow, Value, RemoveButton } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;

  const cartItems = useSelector(selectCartItems);

  const dispatch = useDispatch();

  const decreasItemHandler = () => dispatch(decreasItemQuantity(cartItems,cartItem));
  const increasItemHandler = () => dispatch(increasItemQuantity(cartItems,cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));

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
