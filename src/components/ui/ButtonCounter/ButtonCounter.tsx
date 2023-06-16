import { useState, ChangeEvent, useRef } from "react";
import {
  StyledButtonCounter,
  StyledMinusButton,
  StyledCounterInput,
  StyledPlusButton,
} from "../ButtonCounter/ButtonCounter.styles";
import Typography, {
  FontType,
} from "../../../assets/fonts/FontStyles/Typography";

const ButtonCounter = () => {
  const [counter, setCounter] = useState(1);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleMinusClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handlePlusClick = () => {
    setCounter(counter + 1);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    let newValue = parseInt(event.target.value);

    if (isNaN(newValue)) {
      newValue = 0;
    } else if (newValue > 1000) {
      newValue = 1000;
    } else if (newValue < 0) {
      newValue = 0;
    }

    setCounter(newValue);
  };

  const handleInputClick = () => {
    setCounter(counter);
    if (inputRef.current) {
      inputRef.current.select();
    }
  };

  return (
    <Typography fontType={FontType.Button}>
      <StyledButtonCounter>
        <StyledMinusButton onClick={handleMinusClick}>-</StyledMinusButton>
        <StyledCounterInput
          value={counter}
          onChange={handleInputChange}
          onClick={handleInputClick}
          min={0}
          max={1000}
          ref={inputRef}
        />
        <StyledPlusButton onClick={handlePlusClick}>+</StyledPlusButton>
      </StyledButtonCounter>
    </Typography>
  );
};

export default ButtonCounter;
