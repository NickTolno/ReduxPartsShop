import { styled } from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  width: 100%;
  height: 8.5rem;
  background-color: var(--yellow);
  justify-content: space-between;
  position: fixed;
  margin-top: -136px;
`;

export const StyledLeftBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-start;
  padding-left: 13rem;
`;

export const StyledRightBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  padding-right: 13.7188rem;
  padding-top: 3.5rem;
  padding-bottom: 1.5rem;
`;

export const StyledHeaderLogo = styled.div`
  display: inline-block;
  width: 13rem;
  padding-bottom: 2rem;
  padding-top: 3rem;
`;

export const StyledNavigationBlock = styled.div`
  display: inline-block;
  padding-left: 11.25rem;
  padding-top: 5rem;
  padding-bottom: 2rem;
`;

export const StyledNavigationShopPage = styled.div`
  display: inline-block;
`;

export const StyledDiscoverPage = styled.div`
  display: inline-block;
  padding-left: 4rem;
`;

export const StyledHelpPage = styled.div`
  display: inline-block;
  padding-left: 4rem;
`;
