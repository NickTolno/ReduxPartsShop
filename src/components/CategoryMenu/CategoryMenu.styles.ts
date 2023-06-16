import { styled } from "styled-components";

export const StyledCategoryMenuContainer = styled.div`
  display: flex;
  position: static;
  justify-content: left;
  flex-direction: column;
  width: 22rem;
  height: 27.5rem;
  scroll-behavior: smooth;
  margin-right: 2rem;

  &.stopped {
    position: sticky;
    top: 12rem;
    scroll-behavior: smooth;
  }
`;

export const StyledSearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.5rem;
  height: 5rem;
  margin-right: 3.5rem;
  margin-bottom: 2rem;
`;

export const StyledSearchTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledSearchInput = styled.div`
  display: block;
  width: 18.5rem;
  height: 2.5rem;
`;
export const StyledSearchCategoryTitle = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledCategoriesChoise = styled.div`
  display: flex;
  flex-direction: column;
  width: 17.25rem;
  height: max-content;
  gap: 0.5rem;
`;

export const StyledSearchInputColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 18.5rem;
  height: 5rem;
  margin-right: 3.5rem;
  margin-top: 2rem;
`;

export const StyledSearchTitleColor = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: 1.5rem;
  margin-bottom: 1rem;
`;
export const StyledSearchInputColor = styled.div`
  display: flex;
  flex-direction: column;
  width: 18.5rem;
  height: 2.5rem;
`;
