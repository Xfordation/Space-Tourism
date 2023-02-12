import styled from "styled-components";

export const SubHeader = styled.h5`
  color: ${({ theme }) => theme.colors.white};
  position: ${({ position }) => position ?? "absolute"};
  text-transform: uppercase;
  top: ${({ topDesktop }) => topDesktop ?? "0"};

  span {
    color: #4f5058;
    margin-right: 2rem;
    font-weight: bold;
  }

  /* Media Query Tablet */
  @media (max-width: 820px) {
    top: ${({ topTablet }) => topTablet ?? "0"};
    width: ${({ tabletWidth }) => tabletWidth ?? "100%"};
    text-align: left;
  }

  /* Media Query Mobile */
  @media (max-width: 500px) {
    text-align: center;
  }
`;
