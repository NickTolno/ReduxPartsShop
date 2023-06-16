import { styled } from "styled-components";

export const StyledButtonCounter = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
`;

export const StyledMinusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  color: var(--black);
  width: 6.5rem;
  height: 4rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border: solid;
  box-sizing: border-box;
`;

export const StyledCounterInput = styled.input`
  display: block;
  text-align: center;
  background-color: var(--white);
  color: var(--black);
  width: 7rem;
  height: 4rem;
  border-top: solid;
  border-bottom: solid;
  border-left: none;
  border-right: none;
  box-sizing: border-box;
  outline: none;
`;

export const StyledPlusButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black);
  color: var(--white);
  width: 6.5rem;
  height: 4rem;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  border: solid;
  box-sizing: border-box;
  border-color: var(--black);
`;
