import { styled } from "styled-components";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 136px;
  background-color: var(--white);
`;

export const StyledBannerWindow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`;
export const StyledMainShopPageContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-left: 208px;
  margin-right: 208px;
  margin-top: 41px;
`;

export const StyledReadCrumbs = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 24px;
  margin-bottom: 16px;
`;

export const StyledBuyInfo = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 24px;
`;

export const StyledSearchConfigField = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-top: 56px;
`;

export const StyledSearchResultField = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const StyledSearchResultItemsNames = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 24px;
  margin-bottom: 16px;
`;

export const StyledSearchResultProduct = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;
  margin-bottom: 168px;
`;
