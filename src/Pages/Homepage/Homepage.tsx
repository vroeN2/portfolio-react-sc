import React from "react";
import Breakbar from "../../components/Breakbar";
import Navbar from "../../components/Navbar";
import RoundedPhoto from "../../components/RoundedPhoto";
import History from "../../components/History";
import { BlackTitle, HomepageWrapper } from "./styled";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <HomepageWrapper>
      <Navbar />

      <BlackTitle>
        MACIEJ <br /> ZACHARIASZ
      </BlackTitle>

      <RoundedPhoto />

      <Breakbar />

      <History />
    </HomepageWrapper>
  );
};

export default Homepage;
