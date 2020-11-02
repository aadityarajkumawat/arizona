import styled from "styled-components";
import { motion } from "framer-motion";

interface HomeStyles {}

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HomeBanner = styled.div`
  width: 100vw;
  height: 280px;
  background-color: #f5f5f5;
  position: relative;
  z-index: -1;
  display: flex;
  justify-content: center;
`;

export const BannerContent = styled.div`
  width: 80%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextContent = styled.div`
  font-size: 4vw;

  @media screen and (min-width: 1500px) {
    font-size: 60px;
  }
  transition: all 0.3s ease;

  @media screen and (max-width: 960px) {
    font-size: 35px;
    text-align: center;
  }

  @media screen and (max-width: 550px) {
    font-size: 30px;
  }
`;

export const BannerImage = styled.img`
  transition: all 0.5s ease;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ExploreReDir = styled.div`
  width: 100%;
  height: 330px;
  background-color: #f5f5f5;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ExploreText = styled.div`
  font-size: 40px;
  font-weight: 500;
  margin: 20px 0;
`;

export const ExploreCta = styled.button`
  width: 320px;
  height: 45px;
  border: none;
  background-color: #222;
  border-radius: 8px;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
`;
