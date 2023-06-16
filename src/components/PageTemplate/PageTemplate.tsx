import React from "react";
import Header from "../Header/Header";
import { StyledPageTemplate } from "./PageTemplate.styles";

type Props = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: Props) => {
  return (
    <StyledPageTemplate>
      <Header />
      <div>{children}</div>
    </StyledPageTemplate>
  );
};

export default PageTemplate;
