import {
  StyledItemCardModal,
  StyledItemPhotoModal,
  StyledProductInfoModal,
  StyledNameSpecialSuggestionModal,
  StyledSpecialSuggestionModal,
  StyledNamePositionModal,
  StyledPriceWindowModal,
  StyledVendorCodeModal,
  StyledPositionDeleteField,
  StyledPriceWindowPosition,
  StyledInfoAndButtonField,
  StyledDeleteFromCard,
  StyledCountButtonPositionModal,
} from "./ItemCardModal.styles";
import { StyledButtonCounter } from "../../ui/ButtonCounter/ButtonCounter.styles";
import { IItemCard } from "../../../data/dataProducts";
import BestSellerModal from "../../../assets/svgComponents/bestsellerLabelModal.svg";
import DeleteCartButton from "../../../assets/svgComponents/deleteButton.svg";
import Typography, {
  FontType,
} from "../../../assets/fonts/FontStyles/Typography";

const ItemCardModal = (props: IItemCard) => {
  return (
    <StyledItemCardModal>
      <StyledItemPhotoModal>
        <img
          src={props.photo}
          alt="Item Photo"
          style={{ width: "6.5rem", height: "6.5rem" }}
        />
      </StyledItemPhotoModal>
      <StyledInfoAndButtonField>
        <StyledProductInfoModal>
          <StyledNameSpecialSuggestionModal>
            <StyledSpecialSuggestionModal>
              {props.specialSuggestion ? (
                <img src={BestSellerModal} alt="Special Suggestion" />
              ) : null}
            </StyledSpecialSuggestionModal>
            <Typography fontType={FontType.ProductNameS}>
              <StyledNamePositionModal>
                {props.namePosition}
              </StyledNamePositionModal>
            </Typography>
            <Typography fontType={FontType.ProductDescriptionS}>
              <StyledVendorCodeModal>
                ID: {props.vendorCode}
              </StyledVendorCodeModal>
            </Typography>
            <Typography fontType={FontType.PriceS}>
              <StyledPriceWindowModal>${props.price}</StyledPriceWindowModal>
            </Typography>
          </StyledNameSpecialSuggestionModal>
          <StyledCountButtonPositionModal>
            <StyledButtonCounter />
          </StyledCountButtonPositionModal>
        </StyledProductInfoModal>
      </StyledInfoAndButtonField>
      <StyledPositionDeleteField>
        <Typography fontType={FontType.TotalSumS}>
          <StyledPriceWindowPosition>$sum</StyledPriceWindowPosition>
        </Typography>
        <StyledDeleteFromCard>
          <img src={DeleteCartButton} alt="deleteFromCart" />
        </StyledDeleteFromCard>
      </StyledPositionDeleteField>
    </StyledItemCardModal>
  );
};

export default ItemCardModal;
