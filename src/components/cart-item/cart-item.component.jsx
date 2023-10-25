import {CartItemContainer,ImgStyle, ItemDetails, Name } from "./cart-item.styles.jsx";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  return (
    <CartItemContainer>
      <ImgStyle src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">{quantity} X ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
