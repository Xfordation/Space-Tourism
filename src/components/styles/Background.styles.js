import styled from "styled-components";
export const BackgroundStyled = styled.div`
  /* Custom Background */
  background-image: url(${({ background }) => background});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  height: 100vh;

  /* Media Query */
  /* Tablet */
  @media (max-width: 992px) {
    /* Custom Background */
    background-image: url(${({ backgroundTablet }) => backgroundTablet});
  }
  /* Mobile */
  @media (max-width: 600px) {
    height: auto;
    /* Custom Background */
    background-image: url(${({ backgroundMobile }) => backgroundMobile});
  }
`;
