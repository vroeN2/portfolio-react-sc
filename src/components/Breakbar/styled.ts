import styled from "styled-components";

export const BreakbarWrapper = styled.div`
  max-width: 100vw;
  height: 10vmin;
  background: black;
  color: rgb(213, 255, 64);
  font-size: 3vmax;
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 35%;
  margin: 0 auto;
  white-space: nowrap;
  overflow: hidden;

  & span {
    display: inline-block;
    padding-left: 100%;
    animation: textScroll 15s linear infinite;
  }

  @keyframes textScroll {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;
