import { styled } from "styled-components";

export const StyledCartButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border: none;

  & img {
    width: 2rem;
    height: 2rem;
  }

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 1.5rem;
  }
`;

export const StyledMenuAccount = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  border: none;
  margin-right: 2.7188rem;

  & img {
    width: 2rem;
    height: 2rem;
  }

  & div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 1.5rem;
  }
`;

export const StyledCloseModalWindowButton = styled.div`
  display: block;
`;
