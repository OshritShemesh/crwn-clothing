import { useContext } from "react";

import {CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";

import { CartContext } from "../../../contexts/cart.context";

import CheckoutItem from "../../checkout-item/checkout-item.component";

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} cartItem={item} />
      ))}
      <Total>Total: {cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
