import { useState } from "react";
import {
  StyledItemCard,
  StyledPhotoWindow,
  StyledItemPhoto,
  StyledItemspecialSuggestion,
  StyledProductInfo,
  StyledNameVendorCode,
  StyledNamePosition,
  StyledVendorCode,
  StyledPriceWindow,
  StyledAddToCard,
  StyledItemCardHover,
} from "./ItemCard.styles";
import ButtonAddToCart from "../../ui/ButtonAddToCart/ButtonAddToCart";
import { IItemCard } from "../../../data/dataProducts";
import BestSeller from "../../../assets/svgComponents/bestsellerLabel.svg";
import Typography, {
  FontType,
} from "../../../assets/fonts/FontStyles/Typography";

const ItemCard = (props: IItemCard) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      {isHovered ? (
        <StyledItemCardHover
          key={props.vendorCode}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <StyledPhotoWindow>
            <StyledItemPhoto>
              <img src={props.photo} alt="Item Photo" />
            </StyledItemPhoto>
            <StyledItemspecialSuggestion>
              {props.specialSuggestion ? (
                <img src={BestSeller} alt="Special Suggestion" />
              ) : null}
            </StyledItemspecialSuggestion>
          </StyledPhotoWindow>
          <StyledProductInfo>
            <StyledNameVendorCode>
              <Typography fontType={FontType.ProductNameM}>
                <StyledNamePosition>{props.namePosition}</StyledNamePosition>
              </Typography>
              <Typography fontType={FontType.ProductDescriptionM}>
                <StyledVendorCode>ID: {props.vendorCode}</StyledVendorCode>
              </Typography>
            </StyledNameVendorCode>
            <Typography fontType={FontType.PriceM}>
              <StyledPriceWindow>${props.price}</StyledPriceWindow>
            </Typography>
          </StyledProductInfo>
          <StyledAddToCard>
            <ButtonAddToCart />
          </StyledAddToCard>
        </StyledItemCardHover>
      ) : (
        <StyledItemCard
          key={props.vendorCode}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <StyledPhotoWindow>
            <StyledItemPhoto>
              <img src={props.photo} alt="Item Photo" />
            </StyledItemPhoto>
            <StyledItemspecialSuggestion>
              {props.specialSuggestion ? (
                <img src={BestSeller} alt="Special Suggestion" />
              ) : null}
            </StyledItemspecialSuggestion>
          </StyledPhotoWindow>
          <StyledProductInfo>
            <StyledNameVendorCode>
              <Typography fontType={FontType.ProductNameM}>
                <StyledNamePosition>{props.namePosition}</StyledNamePosition>
              </Typography>
              <Typography fontType={FontType.ProductDescriptionM}>
                <StyledVendorCode>ID: {props.vendorCode}</StyledVendorCode>
              </Typography>
            </StyledNameVendorCode>
            <Typography fontType={FontType.PriceM}>
              <StyledPriceWindow>${props.price}</StyledPriceWindow>
            </Typography>
          </StyledProductInfo>
          <StyledAddToCard>
            <ButtonAddToCart />
          </StyledAddToCard>
        </StyledItemCard>
      )}
    </>
  );
};

export default ItemCard;
