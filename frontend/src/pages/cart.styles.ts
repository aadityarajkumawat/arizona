import styled from "styled-components";

export const CartContainer = styled.div`
  width: 100%;
  //   height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 150px;
`;

export const CartContents = styled.div`
  width: 80%;
  max-width: 1300px;
  height: 100%;
`;

export const CartPageName = styled.div`
  width: 100%;
  height: 60px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

export const CartItemsAndBillWrapper = styled.div`
  width: 100%;
  //   height: 300px;
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

export const CartItems = styled.div`
  width: 95% 
  justify-self: start;
//   height: 300px;
  background-color: #eee;
`;

export const CartBill = styled.div`
  width: 95%;
  justify-self: end;
  height: 200px;
  background-color: #eee;
`;

export const CartItem = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
`;

export const CartCheckBox = styled.div`
  width: 90px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainCartItem = styled.div`
  width: calc(100% - 90px);
  height: 200px;
  display: flex;
`;

export const CheckBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background-color: #c4c4c4;
`;

export const CartProductImage = styled.img`
  width: 200px;
  height: 200px;
`;

export const CartProductInfo = styled.div`
  width: calc(100% - 200px);
  height: 200px;
  display: flex;
  padding: 20px 0 0 20px;
  justify-content: flex-start;
  flex-direction: column;
`;

export const CartProductPrice = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  margin-top: 10px;
`;

export const CartProductName = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
`;

export const ItemQuantityPicker = styled.select`
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
`;

export const QuantityOptions = styled.option`
  border: none;
`;
