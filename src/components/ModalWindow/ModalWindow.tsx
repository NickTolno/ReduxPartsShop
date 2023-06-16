import { createPortal } from "react-dom";
import {
  StyledGlobalModuleWindow,
  StyledModalWindow,
  StyledCartWindowContainer,
  StyledCartWindowTitle,
  StyledMainCartWindow,
  StyledClearShoppingCart,
  StyledProductWindow,
  StyledSumInfoWindow,
  StyledSumInfoWindowSubtotal,
  StyledSumInfoWindowShipping,
  StyledSumInfoWindowDivider,
  StyledSumInfoWindowTotal,
  StyledSumInfoWindowGoToCheckoutButton,
} from "./ModalWindow.styles";
import Typography, { FontType } from "../../assets/fonts/FontStyles/Typography";
import Button from "../ui/Button/Button";
import CloseButton from "../../assets/svgComponents/CloseButton.svg";
import ItemCardModal from "../../components/ItemCard/ItemCardModal/ItemCardModal";
import dataProducts, { IItemCard } from "../../data/dataProducts";
import { StyledButtonGoToCheckout } from "../ui/ButtonGoToCheckout/ButtonGoToCheckout";

const ModalWindow = ({
  handleCloseModal,
}: {
  handleCloseModal: () => void;
}) => {
  const portalRoot = document.getElementById("modal-portal-root");

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <StyledGlobalModuleWindow>
      <StyledModalWindow>
        <StyledCartWindowContainer>
          <Typography fontType={FontType.CategoryName}>
            <StyledCartWindowTitle>Your order</StyledCartWindowTitle>
          </Typography>
          <StyledMainCartWindow>
            <StyledProductWindow>
              {dataProducts.map((item: IItemCard) => (
                <ItemCardModal
                  key={item.id}
                  vendorCode={item.vendorCode}
                  namePosition={item.namePosition}
                  photo={item.photo}
                  price={item.price}
                  specialSuggestion={item.specialSuggestion}
                />
              ))}
            </StyledProductWindow>
            <StyledSumInfoWindow>
              <Typography fontType={FontType.Body}>
                <StyledSumInfoWindowSubtotal>
                  <div>Subtotal</div>
                  <div>$36.70</div>
                </StyledSumInfoWindowSubtotal>
                <StyledSumInfoWindowShipping>
                  <div>Shipping</div>
                  <div>$5.00</div>
                </StyledSumInfoWindowShipping>
                <StyledSumInfoWindowDivider />
                <Typography fontType={FontType.CategoryName}>
                  <StyledSumInfoWindowTotal>
                    <div>Total</div>
                    <div>$41.70</div>
                  </StyledSumInfoWindowTotal>
                </Typography>
              </Typography>
              <StyledSumInfoWindowGoToCheckoutButton>
                <StyledButtonGoToCheckout />
              </StyledSumInfoWindowGoToCheckoutButton>
            </StyledSumInfoWindow>
          </StyledMainCartWindow>
          <Typography fontType={FontType.ClearLink}>
            <StyledClearShoppingCart>
              Clear shopping cart
            </StyledClearShoppingCart>
          </Typography>
        </StyledCartWindowContainer>
        <Button onClick={handleCloseModal}>
          <img
            src={CloseButton}
            style={{
              position: "absolute",
              width: "0.5rem",
              height: "0.5rem",
              top: "2.75rem",
              right: "2.75rem",
            }}
          />
        </Button>
      </StyledModalWindow>
    </StyledGlobalModuleWindow>,
    portalRoot
  );
};

export default ModalWindow;
