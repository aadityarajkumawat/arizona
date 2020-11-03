import React from "react";
import {
  DisplayHeading,
  ExploreActionSection,
  ExploreButton,
  HomeDisplayContainer,
  HomeDisplayContent,
  Img,
  ItemsContainer,
  ProductImageContainer,
  ProductItem,
} from "./homeDisplay.styles";

interface Props {}

const HomeDisplay: React.FC<Props> = () => {
  return (
    <HomeDisplayContainer>
      <HomeDisplayContent>
        <DisplayHeading>Fresh Arrivals</DisplayHeading>
        <ItemsContainer>
          <ProductItem layout>
            <ProductImageContainer>
              <Img src="" />
            </ProductImageContainer>
            <ExploreActionSection>
              <ExploreButton>Explore</ExploreButton>
            </ExploreActionSection>
          </ProductItem>
          <ProductItem layout>
            <ProductImageContainer>
              <Img src="" />
            </ProductImageContainer>
            <ExploreActionSection>
              <ExploreButton>Explore</ExploreButton>
            </ExploreActionSection>
          </ProductItem>
          <ProductItem layout>
            <ProductImageContainer>
              <Img src="" />
            </ProductImageContainer>
            <ExploreActionSection>
              <ExploreButton>Explore</ExploreButton>
            </ExploreActionSection>
          </ProductItem>
          <ProductItem layout>
            <ProductImageContainer>
              <Img src="" />
            </ProductImageContainer>
            <ExploreActionSection>
              <ExploreButton>Explore</ExploreButton>
            </ExploreActionSection>
          </ProductItem>
        </ItemsContainer>
      </HomeDisplayContent>
    </HomeDisplayContainer>
  );
};
export default HomeDisplay;
