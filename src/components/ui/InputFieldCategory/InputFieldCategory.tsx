import { useState, ChangeEvent } from "react";
import { styled } from "styled-components";

const StyledInputFieldCategory = styled.input`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow: hidden;
  width: 18.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  border-width: 0.0625rem;
  border-color: var(--darkGray);
`;

const InputFieldCategory = () => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <StyledInputFieldCategory
      type="text"
      value={value}
      placeholder={"Keyword or piece number"}
      onChange={handleChange}
    />
  );
};

export default InputFieldCategory;
