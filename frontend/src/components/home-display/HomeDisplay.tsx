import React from "react";
import { useHistory } from "react-router-dom";
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

interface Props {
  title: string;
}

const HomeDisplay: React.FC<Props> = ({ title }) => {
  let history = useHistory();
  const redirToCategory = () => {
    history.push("/choose-category");
  };
  return (
    <HomeDisplayContainer>
      <HomeDisplayContent>
        <DisplayHeading>{title}</DisplayHeading>
        <ItemsContainer>
          <ProductItem layout onClick={redirToCategory}>
            <ProductImageContainer>
              <Img src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/black-solid-harrington-jacket-153138-default.jpg?alt=media&token=2520067f-af58-4d9b-b4a4-e8b46aa910de" />
            </ProductImageContainer>
            <ExploreActionSection>
              <ExploreButton>Explore</ExploreButton>
            </ExploreActionSection>
          </ProductItem>
          <ProductItem layout onClick={redirToCategory}>
            <ProductImageContainer>
              <Img src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/black-and-white-printed-cut-sew-jacket-130648-default.jpg?alt=media&token=3d31ecdb-395f-4f6b-9724-5135ab74f465" />
            </ProductImageContainer>
            <ExploreActionSection>
              <ExploreButton>Explore</ExploreButton>
            </ExploreActionSection>
          </ProductItem>
          <ProductItem layout onClick={redirToCategory}>
            <ProductImageContainer>
              <Img src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/navy-red-and-white-colourbocked-cut-sew-sweatshirt-170333-default.jpg?alt=media&token=c6b5084e-0a99-4684-9a10-643d50db9733" />
            </ProductImageContainer>
            <ExploreActionSection>
              <ExploreButton>Explore</ExploreButton>
            </ExploreActionSection>
          </ProductItem>
          <ProductItem layout onClick={redirToCategory}>
            <ProductImageContainer>
              <Img src="https://firebasestorage.googleapis.com/v0/b/estore-a6fcb.appspot.com/o/yellow-and-black-cut-sew-printed-hooded-sweatshirt-155401-default.jpg?alt=media&token=e3a5dd15-490d-418b-9d68-ff25452ac0b8" />
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
