import styled from "styled-components";

interface CartStyles {
  checkB: boolean;
}

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
  padding: 40px;
  padding-top: 25px;
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

export const CheckBox = styled.button<CartStyles>`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 5px;
  background-color: ${({ checkB }) => (!checkB ? "#c4c4c4" : "#222")};

  &:active,
  &:focus {
    outline: none;
  }
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

export const QuantitySelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 30px;
  // background-color: red;
  border-radius: 8px;
`;

export const DescButton = styled.div`
  width: 30px;
  height: 30px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  user-select: none;
  justify-content: center;
  background-color: #222;
  color: #eee;
  cursor: pointer;
  align-items: center;
`;

export const ActualQuantity = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  cursor: none;
  align-items: center;
  background-color: white;
`;

export const IncButton = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 8px;
  color: #eee;
  border-top-right-radius: 8px;
  cursor: pointer;
  background-color: #222;
  user-select: none;
`;

export const WhenCartIsEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-weight: 500;
  font-size: 20px;
`;

export const BillFieldContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
export const BillFieldName = styled.div``;

export const BillFieldValue = styled.div``;

export const CheckoutButton = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 10px;
  border: none;
  background-color: #222;
  color: #eee;
  margin-top: 15px;
  cursor: pointer;
`;
