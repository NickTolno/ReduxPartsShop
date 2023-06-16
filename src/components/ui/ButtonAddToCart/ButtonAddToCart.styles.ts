import { styled } from "styled-components";

export const StyledButtonAddToCart = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
  height: 4rem;
  background-color: var(--black);
  border-radius: 1rem;
  color: var(--white);

  &:hover {
    background-color: var(--white);
    border-color: var(--black);
    border-style: solid;
    color: var(--black);
  }
`;
