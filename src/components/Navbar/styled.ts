import styled from "styled-components";

const FlexDiv = styled.div`
  display: flex;
`;

export const MenuItemWrapper = styled(FlexDiv)`
  justify-content: space-between;
  align-items: center;
`;

export const MenuLink = styled.button`
  border: none;
  background: transparent;
  color: rgba(14, 14, 14);
  padding: 2vmin 4vmin;
  white-space: nowrap;
  transition: 0.15s all cubic-bezier(0, 0.68, 1, 0.59);
  font: inherit;
  font-size: 2vmin;

  &:hover,
  &:focus {
    cursor: pointer;
    animation: pulse 1s;
    box-shadow: 0 0 0 2em transparent;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(14, 14, 14);
    }
  }
`;
