import styled from "styled-components";

export const NavigationStyled = styled.nav`
  background-color: transparent;
  width: 100%;
  display: flex;
  padding: 3rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  justify-content: space-between;
  align-items: center;
  ol {
    display: flex;
    background: rgba(255, 255, 255, 0.04);
    width: 50%;
    backdrop-filter: blur(40.7742px);
    justify-content: space-evenly;
    align-items: center;
    gap: 1.5rem;
    position: absolute;
    right: 0;
    list-style-type: decimal-leading-zero;
    list-style-position: inside;
    li {
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fontTypes.navText[0]};
      font-size: ${({ theme }) => theme.fontTypes.navText[1]};
      letter-spacing: ${({ theme }) => theme.fontTypes.navText[2]};
      font-weight: 700;
      background-color: transparent;
      padding: 2.5rem;
      cursor: pointer;
      &:hover {
        border-bottom: 2px solid #979797;
      }
    }
  }
  .toggleButton {
    display: none;
    background-color: transparent;
    border: none;
    color: #ffffff;
    font-size: 30px;
  }
  .hr {
    position: absolute;
    width: 42%;
    z-index: 2;
    height: 1px;
    left: 167px;

    background: #ffffff;
    mix-blend-mode: normal;
    opacity: 0.25;
  }
  .active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }

  /* Media Query 1280px */
  @media (max-width: 1280px) {
    ol {
      width: 50%;
      gap: 1.5rem;
      li {
        padding: 2rem;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid #979797;
        }
      }
    }
    .hr {
      width: 38%;
    }
  }

  /* Media Query Tablet */
  @media (max-width: 820px) {
    padding: 1.5rem;
    .hr {
      display: none;
    }
    ol {
      display: flex;
      width: 60%;
      padding: 0 1rem;
      gap: 1.5rem;
      right: 0;
      top: 0;
      li {
        padding: 2rem 0;
      }
    }
  }

  /* Media Query Mobile */
  @media (max-width: 500px) {
    .toggleButton {
      display: block;
      cursor: pointer;
      z-index: 5;
    }
    ol {
      width: 70%;
      height: 100vh;
      flex-direction: column;
      gap: 2.5rem;
      padding: 5rem 0 5rem 1rem;
      align-items: center;
      justify-content: flex-start;

      li {
        text-align: left;
        width: 100%;
        padding: 0.5rem 0;
        &:hover {
          border-bottom: none;
          border-right: 2px solid #979797;
        }
      }
    }
    .active {
      border-bottom: none;
      border-right: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;
