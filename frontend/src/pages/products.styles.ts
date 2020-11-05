import styled from "styled-components";
import { motion } from "framer-motion";

export const ProductPageContainer = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductContentsContainer = styled.div`
  width: 80%;
  height: 100%;
  max-width: 1300px;
`;

export const ProductHeader = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
`;

export const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ProductItemMain = styled.div`
  width: 330px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  box-shadow: 4px 4px 4px 0px #00000010, -4px 0 4px 0 #00000010;
  border-radius: 15px;
  &:last-child {
    margin-bottom: 200px;
  }
`;

export const LeftImage = styled.div`
  width: 260px;
  height: 260px;
`;

export const RightInfo = styled.div`
  width: 100%;
  // height: ;
  text-align: center;
  padding: 25px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProductImageMain = styled.img`
  width: 260px;
  height: 260px;
`;

export const ProductName = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 500;
  color: #96150c;
  margin-bottom: 10px;
`;

export const ProductCategory = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const AddToCartButton = styled.button`
  width: 280px;
  height: 35px;
  background-color: #222;
  border: none;
  color: #eee;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
