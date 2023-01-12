import styled from "styled-components";

export const BreakbarWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  height: 10vmin;
  background: rgb(16, 16, 16);
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
