import { useState } from "react";
import SelectIcon from "../../../assets/svgComponents/yescheckbox.svg";
import NonSelectIcon from "../../../assets/svgComponents/nocheckbox.svg";
import { styled } from "styled-components";

const StyledCategoryMenuSelectButton = styled.div`
  display: block;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  margin-right: 1rem;
`;

const CategoryMenuSelectButton = () => {
  const [isSelectButton, setIsSelectButton] = useState(true);

  const handleClick = () => {
    setIsSelectButton(!isSelectButton);
  };

  return (
    <StyledCategoryMenuSelectButton onClick={handleClick}>
      {isSelectButton ? (
        <img src={SelectIcon} alt="Select Icon" draggable="false" />
      ) : (
        <img src={NonSelectIcon} alt="Non-Select Icon" draggable="false" />
      )}
    </StyledCategoryMenuSelectButton>
  );
};

export default CategoryMenuSelectButton;
