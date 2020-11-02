import React, { useEffect } from "react";
import {
  BannerContent,
  BannerImage,
  ExploreCta,
  ExploreReDir,
  ExploreText,
  HomeBanner,
  HomeContainer,
  TextContent,
} from "./home.styles";
import BannerImg from "../img/homeimg.png";
import HomeDisplay from "../components/home-display/HomeDisplay";
import { connect } from "react-redux";
import { toggleMUNav } from "../actions/Navbar";

interface Props {
  toggleMUNav: (T: boolean) => void;
}

const Home: React.FC<Props> = ({ toggleMUNav }) => {
  useEffect(() => {
    toggleMUNav(true);
  }, []);
  return (
    <HomeContainer>
      <HomeBanner>
        <BannerContent>
          <TextContent>
            Grab the fresh collection of men’s winter clothing
          </TextContent>
          <BannerImage src={BannerImg}></BannerImage>
        </BannerContent>
      </HomeBanner>
      <HomeDisplay />
      <HomeDisplay />
      <HomeDisplay />

      <ExploreReDir>
        <ExploreText>Explore More</ExploreText>
        <ExploreCta>Shop by category</ExploreCta>
      </ExploreReDir>
    </HomeContainer>
  );
};

export default connect(null, { toggleMUNav })(Home);
