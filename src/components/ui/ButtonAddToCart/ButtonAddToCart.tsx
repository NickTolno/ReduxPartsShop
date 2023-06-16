import { useState } from "react";
import { StyledButtonAddToCart } from "./ButtonAddToCart.styles";
import Typography, {
  FontType,
} from "../../../assets/fonts/FontStyles/Typography";

import ButtonCounter from "../ButtonCounter/ButtonCounter";

const ButtonAddToCart = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <Typography fontType={FontType.Button}>
      {clicked ? (
        <ButtonCounter />
      ) : (
        <StyledButtonAddToCart onClick={handleClick}>
          ADD TO CART
        </StyledButtonAddToCart>
      )}
    </Typography>
  );
};

export default ButtonAddToCart;
