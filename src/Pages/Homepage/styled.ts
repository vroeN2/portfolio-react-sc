import styled from "styled-components";

export const HomepageWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 300vh;
  padding: 5vmin 10vmin;
  background: linear-gradient(180deg, rgb(213, 255, 64) 60%, #1f1f1f 60%);
  z-index: -2;
`;

export const BlackTitle = styled.h2`
  color: rgb(14, 14, 14);
  font-size: 6vmax;
  letter-spacing: -0.35vmax;
  line-height: 80%;
  margin-top: 5vmin;
  z-index: 3;
`;
