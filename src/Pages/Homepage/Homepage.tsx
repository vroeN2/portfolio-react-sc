import React from "react";
import Navbar from "../../components/Navbar";
import { BlackTitle, HomepageWrapper } from "./styled";

type Props = {};

const Homepage = (props: Props) => {
  return (
    <HomepageWrapper>
      <Navbar />

      <BlackTitle>
        MACIEJ <br /> ZACHARIASZ
      </BlackTitle>
    </HomepageWrapper>
  );
};

export default Homepage;
