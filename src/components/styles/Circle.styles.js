import styled from "styled-components";

export const Circle = styled.div`
  width: 300px;
  height: 300px;
  cursor: pointer;
  float: right;
  border-radius: 150px;
  border: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  h6 {
    line-height: 300px;
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.Bellefair};
    letter-spacing: 2px;
    font-weight: normal;
    font-size: 32px;
    text-align: center;
  }
  &:after {
    display: none;
  }
  &:hover {
    box-shadow: 0 0 0 100px rgba(151, 151, 151, 0.5);
    transition: ease-in 0.5s;
    animation: pulse 0.5s linear 0.5s infinite;
  }
  &:hover:before {
    -webkit-animation: toRightFromLeft 0.3s forwards;
    -moz-animation: toRightFromLeft 0.3s forwards;
    animation: toRightFromLeft 0.3s forwards;
  }
  @-webkit-keyframes toRightFromLeft {
    49% {
      -webkit-transform: translate(100%);
    }
    50% {
      opacity: 0;
      -webkit-transform: translate(-100%);
    }
    51% {
      opacity: 1;
    }
  }
  @-moz-keyframes toRightFromLeft {
    49% {
      -moz-transform: translate(100%);
    }
    50% {
      opacity: 0;
      -moz-transform: translate(-100%);
    }
    51% {
      opacity: 1;
    }
  }
  @keyframes toRightFromLeft {
    49% {
      transform: translate(100%);
    }
    50% {
      opacity: 0;
      transform: translate(-100%);
    }
    51% {
      opacity: 1;
    }
  }

  /* Media Query */
  /* Tablet */
  @media (max-width: 820px) {
    float: none;
    margin: auto;
  }
  /* Mobile */
  @media (max-width: 500px) {
    width: 200px;
    height: 200px;
    border-radius: 100px;

    h6 {
      line-height: 200px;
      font-size: 24px;
    }
    &:hover {
      box-shadow: 0 0 0 50px rgba(151, 151, 151, 0.5);
      transition: ease-in 0.5s;
      animation: pulse 0.5s linear 0.5s infinite;
    }
  }
`;
