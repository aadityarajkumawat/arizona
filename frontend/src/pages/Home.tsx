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
import { resetSubmitState } from "../actions/Auth";

interface Props {
  toggleMUNav: (T: boolean) => void;
  resetSubmitState: () => void;
}

const Home: React.FC<Props> = ({ toggleMUNav, resetSubmitState }) => {
  useEffect(() => {
    toggleMUNav(true);
    resetSubmitState();
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

export default connect(null, { toggleMUNav, resetSubmitState })(Home);
