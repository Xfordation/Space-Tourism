import styled from "styled-components";

export const Tabs = styled.button`
  display: flex;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: 18px;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  letter-spacing: 2.6;
  padding: 0.5rem 0;
  font-family: ${({ theme }) => theme.fonts.Barlow};
  &:hover {
    border-bottom: 3px solid #979797;
  }
  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid #ffffff;
    
  `}
`;
