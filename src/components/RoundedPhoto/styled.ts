import styled from "styled-components";

export const PhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 5vmin auto;
  /* width: calc(100vw - 20vmin); */
  width: 60%;
  height: auto;
  z-index: -1;
`;

export const CustomPhoto = styled.img`
  border-top-right-radius: 4vmax;
  border-top-left-radius: 4vmax;
  border: 1px solid transparent;
  box-sizing: border-box;
`;
