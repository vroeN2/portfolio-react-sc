import styled from "styled-components";

export interface BadgePosition {
  right: string;
  top: string;
}

const FlexDiv = styled.div`
  display: flex;
`;

export const RoundBadgeWithArrow = styled(FlexDiv)<BadgePosition>`
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1vmin solid #1f1f1f;
  color: rgb(213, 255, 64);
  background: rgb(16, 16, 16);
  z-index: 3;
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  width: 10vmin;
  height: 10vmin;
  font-size: 5vmin;
  transition: 1s all cubic-bezier(0, 0.68, 1, 0.59);

  &:hover,
  &:focus {
    cursor: pointer;
    animation: pulseToxic 1s;
    box-shadow: 0 0 0 2em transparent;
    transform: scale(1.05);
  }

  @keyframes pulseToxic {
    0% {
      box-shadow: 0 0 0 0 rgba(213, 255, 64);
    }
  }
`;
