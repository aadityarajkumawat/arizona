import styled from "styled-components";
import { motion } from "framer-motion";

interface HomeDisplayStyles {}

export const HomeDisplayContainer = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

export const HomeDisplayContent = styled.div`
  width: 80%;
  height: 100%;
  max-width: 1300px;
  padding: 10px 10px 40px 10px;
`;

export const DisplayHeading = styled.div`
  width: 100%;
  padding: 5px 0;
  font-size: 30px;
  font-weight: 600;
`;

export const ItemsContainer = styled(motion.div)`
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 100%;
  margin-top: 40px;
  align-items: center;
  justify-items: center;
  @media screen and (max-width: 1120px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProductItem = styled(motion.div)`
  width: 244px;
  height: 366px;
  border-radius: 10px;
  box-shadow: 4px 4px 4px 0px #00000010, -4px 0px 4px 0px #00000010;
  transition: all 0.1s ease;
  @media screen and (max-width: 1330px) {
    width: 200px;
    height: 260px;
  }
  @media screen and (max-width: 1120px) {
    margin-bottom: 35px;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 274px;

  @media screen and (max-width: 1330px) {
    height: 200px;
  }
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ExploreActionSection = styled.div`
  width: 100%;
  height: calc(100% - 274px);

  @media screen and (max-width: 1330px) {
    height: calc(100% - 200px);
  }
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ExploreButton = styled.button`
  width: 180px;
  height: 35px;
  border: none;
  background-color: #222;
  border-radius: 8px;
  color: #fff;

  @media screen and (max-width: 1330px) {
    height: 30px;
    width: 150px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
