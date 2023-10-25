import styled from "styled-components";

// .checkout-item-container {
export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

//     .image-container {
export const ImgContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

//       img {
export const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
`;

//     .name,
//     .price {
export const ItemDetailes = styled.span`
  width: 23%;
`;

//     .quantity {
export const Quantity = styled.span`
  width: 23%;
  display: flex;
`;

//       .arrow {
export const Arrow = styled.div`
  cursor: pointer;
`;

//       .value {
export const Value = styled.span`
  margin: 0 10px;
`;

//     .remove-button {
export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
