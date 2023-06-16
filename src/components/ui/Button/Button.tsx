import { FC } from "react";
import { IButton } from "./Button.types";
import { styled } from "styled-components";

const StyledButton = styled.div`
  border: none;
  display: block;
  justify-content: center;
  align-items: center;
`;

const Button: FC<IButton> = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
