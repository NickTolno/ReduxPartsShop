import { styled } from "styled-components";

export const StyledItemCard = styled.span`
  display: block;
  box-sizing: border-box;
  margin: 0;
  background-color: var(--white);
  width: 22rem;
  height: 29.5rem;
  border-radius: 0.25rem;
  border-style: solid;
  border-color: var(--gray);
  border-width: 0.125rem;
`;

export const StyledItemCardHover = styled.span`
  display: block;
  box-sizing: border-box;
  margin: 0;
  background-color: var(--white);
  width: 22rem;
  height: 29.5rem;
  border-radius: 0.25rem;
  border-style: solid;
  border-color: var(--black);
  border-width: 0.125rem;
  box-shadow: 0.3125rem 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
`;

export const StyledPhotoWindow = styled.div`
  width: 20rem;
  height: 17rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
`;

export const StyledItemPhoto = styled.div`
  display: block;
  width: 12rem;
  height: 12rem;
  margin-left: 4rem;
  margin-top: 2.5rem;
  margin-right: 4rem;
  margin-bottom: 1rem;
`;

export const StyledItemspecialSuggestion = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7.6875rem;
  height: 1.5rem;
  margin-right: 12.3125rem;
`;

export const StyledProductInfo = styled.div`
  display: flex;
  width: 20rem;
  height: 4.5rem;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;

export const StyledNameVendorCode = styled.div`
  display: block;
  width: 13.0625rem;
  height: 4.5rem;
  margin-right: 4.1875rem;
`;

export const StyledNamePosition = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: flex-start;
  width: 13.0625rem;
  height: 3rem;
`;

export const StyledVendorCode = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 13.0625rem;
  height: 1.5rem;
  color: var(--gray);
`;

export const StyledPriceWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.75rem;
  height: 1.5rem;
  margin-bottom: 3rem;
  margin-right: 4.1875rem;
`;

export const StyledAddToCard = styled.div`
  display: block;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
`;
