import styled from "styled-components";

export const HistoryWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background: rgb(23, 23, 23);
  font-size: 3vmax;
  display: flex;
  position: absolute;
  left: 0;
  top: calc(35% + 10vmin);
  margin: 0 auto;
  padding: 5vmin 10vmin;
  white-space: nowrap;
  overflow: hidden;
  z-index: 8;
  display: flex;
  flex-direction: column;

  & span {
    color: rgb(97, 97, 97);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-bottom: 5vmin;

    & h2.headline {
      font-size: 3vmax;
      color: rgb(196, 196, 196);
      margin: 0;
      width: 30%;

      &:after {
        content: ":";
        color: rgb(213, 255, 64);
      }
    }
  }
`;

export const DescriptionText = styled.h2`
  font-size: 1vmax;
  display: inline-block;
  word-break: break-word;
  width: 40%;
`;
