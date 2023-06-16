import styled from "styled-components";

export const Wrapper = styled.div<{ horizontal: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  padding: 1rem;
  gap: 1rem;
  border: 1px solid black;
  border-radius: 0.25rem;
  height: ${(props) => (props.horizontal ? "9.5rem" : "29.5rem")};
  width: ${(props) => (props.horizontal ? "30rem" : "22rem")};
`;

export const StyledImage = styled.img``;

export const InfoAndButton = styled.div``;

export const PartNameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
