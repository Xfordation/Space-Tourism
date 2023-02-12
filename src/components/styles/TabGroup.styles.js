import styled from "styled-components";

export const TabGroup = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap ?? "2rem"};
  width: 100%;
  /* Media Query Tablet */
  @media (max-width: 992px) {
    justify-content: ${({ justifyContent }) => justifyContent ?? "center"};
  }

  /* Media Query Mobile */
  @media (max-width: 600px) {
    gap: ${({ mobileGap }) => mobileGap ?? "2rem"};
    flex-direction: ${({ flexDirection }) => flexDirection ?? "row"};
  }
`;
