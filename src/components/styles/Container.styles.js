import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 1320px;
  max-width: 100%;
  padding: 0 2rem;
  margin: 0 auto;

  /* Media Query */

  /* >= 1280px */
  @media (max-width: 1280px) {
    width: 1140px;
  }

  /* >=  */
  @media (max-width: 1024px) {
    width: 992px;
  }

  /* Tablet 1 */
  @media (max-width: 768px) {
    width: 720px;
  }

  /* Tablet 2 */
  @media (max-width: 820px) {
    width: 768px;
  }

  /* Mobile */
  @media (max-width: 500px) {
    width: 100%;
    padding: 0 1rem;
  }
`;
