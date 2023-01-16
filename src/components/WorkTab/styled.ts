import styled from "styled-components";

export const PlaceWrapper = styled.div`
  background: transparent;
  color: rgb(95, 95, 95);
  font-size: 2.5vmax;
  display: flex;
  flex-direction: column;
  padding: 2vmin 1vmin;
  border-top: 1px solid rgb(41, 41, 41);
  border-bottom: 1px solid rgb(41, 41, 41);
  transition: 0.2s all cubic-bezier(0, 0.68, 1, 0.59);
  width: 100;
  box-sizing: border-box;

  & .arrowIcon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    width: 10vmin;
    height: 10vmin;
    font-size: 5vmin;
    transition: 0.2s all cubic-bezier(0, 0.68, 1, 0.59);

    &:hover,
    &:focus {
      cursor: pointer;
      animation: pulseBlack 1s;
      box-shadow: 0 0 0 2em transparent;
      transform: scale(1.05);
    }
  }

  &:hover {
    color: rgb(196, 196, 196);
    background: rgb(41, 41, 41);

    & .arrowIcon {
      background: rgb(213, 255, 64);
      color: rgb(23, 23, 23);
    }
  }
`;

export const PlaceTab = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.div`
  transition: 0.2s all cubic-bezier(0, 0.68, 1, 0.59);
  display: flex;
  flex-direction: column;
`;

export const DescriptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10vmin;
  font-size: 1.5vmin;
`;
