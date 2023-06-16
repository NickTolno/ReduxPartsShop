import { styled } from "styled-components";

export const StyledGlobalModuleWindow = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
  pointer-events: auto;
`;

export const StyledModalWindow = styled.span`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  background-color: #ffffff;
  width: 1248px;
  height: 608px;
  padding: 20px;
  border: 1px solid #333333;
  border-radius: 4px;
`;

export const StyledCartWindowContainer = styled.div`
  display: block;
  width: 64rem;
  height: 34rem;
  margin-left: 6rem;
  margin-top: 2rem;
  margin-right: 4rem;
`;

export const StyledCartWindowTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 6.4375rem;
  height: 1.5rem;
`;

export const StyledMainCartWindow = styled.div`
  display: flex;
  flex-direction: row;
  width: 64rem;
  height: 29.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const StyledClearShoppingCart = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 6.9375rem;
  height: 1rem;
`;

export const StyledProductWindow = styled.div`
  display: flex;
  width: 34.0625rem;
  height: 28.5rem;
  flex-direction: column;
  overflow-y: scroll;
  margin-right: 8rem;
  padding-top: 0.5rem;
  border-color: var(--lightGrayScroll);
  border-style: solid;
  border-width: 0.0625rem;
`;

export const StyledSumInfoWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 22rem;
  height: 12.5rem;
  /* margin-bottom: 17rem; */
`;

export const StyledSumInfoWindowSubtotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  height: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledSumInfoWindowShipping = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  height: 1.5rem;
`;

export const StyledSumInfoWindowDivider = styled.div`
  display: block;
  width: 22rem;
  height: 1.4688rem;
  border-bottom: 0.0625rem solid black;
`;

export const StyledSumInfoWindowTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 22rem;
  height: 1.5rem;
  margin-top: 0.5313rem;
  margin-bottom: 1.5rem;
`;

export const StyledSumInfoWindowGoToCheckoutButton = styled.div`
  display: block;
  width: 22rem;
  height: 3.5rem;
`;
