import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  background-color: transparent;
  align-items: center;

  /* Custom Properties Desktop*/
  padding: ${({ properties }) => properties.desktop.padding ?? "1rem"};
  gap: ${({ properties }) => properties.desktop.gap ?? "1rem"};
  justify-content: ${({ properties }) =>
    properties.desktop.justifyContent ?? "center"};
  color: ${({ properties }) => properties.desktop.color ?? "black"};

  /* Animation to Rotate */
  .rotatePlanet {
    animation: rotation 29s infinite linear;
  }
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }

  /* Media Query 1280px */
  @media (max-width: 1280px) {
    .planetImg {
      width: 350px;
      height: 100%;
    }
    /* Custom Properties Tablet */
    padding: ${({ properties }) =>
      properties.desktop.padding1280 ?? properties.desktop.padding};
    gap: ${({ properties }) =>
      properties.desktop.gap1280 ?? properties.desktop.gap};
  }

  /* Media Query Tablet */
  @media (max-width: 820px) {
    text-align: center;
    gap: ${({ properties }) => properties.tablet.gap ?? "1rem"};

    /* Custom Properties Tablet */
    flex-direction: ${({ properties }) =>
      properties.tablet.columnPosition ?? "column"};
    justify-content: ${({ properties }) =>
      properties.tablet.justifyContent ?? "center"};

    padding: ${({ properties }) =>
      properties.tablet.padding ?? properties.desktop.padding};

    img {
      margin: 0 auto;
      width: ${({ properties }) => properties.tablet.imageWidth ?? "100%"};
    }
    .subHeadPos {
      margin-top: 1.5rem;
      text-align: left;
    }
    section {
      width: 100%;
    }
  }

  /* Media Query Mobile */
  @media (max-width: 500px) {
    padding: 5rem 0;
    flex-direction: ${({ properties }) =>
      properties.mobile.columnPosition ?? "column"};

    img {
      margin: 0 auto;
      height: max-content;
      width: ${({ properties }) =>
        properties.mobile.imageWidth ?? properties.tablet.imageWidth};
    }
    .subHeadPos {
      margin: 1rem auto;
      text-align: center;
    }
  }
`;
