import { useState } from "react";
import {
  StyledHeader,
  StyledHeaderLogo,
  StyledNavigationBlock,
  StyledNavigationShopPage,
  StyledDiscoverPage,
  StyledHelpPage,
  StyledRightBlock,
  StyledLeftBlock,
} from "./Header.styles";
import {
  StyledCartButton,
  StyledMenuAccount,
} from "../ui/Button/Button.styles";
import CartPicture from "../../assets/svgComponents/Cart.svg";
import MainLogo from "../../assets/svgComponents/MainLogo.svg";
import MenuAccount from "../../assets/svgComponents/MenuAccount.svg";
import ModalWindow from "../ModalWindow/ModalWindow";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCallMenuAccount = () => {
    console.log("Call Account!");
  };

  return (
    <>
      <StyledHeader>
        <StyledLeftBlock>
          <StyledHeaderLogo>
            <img src={MainLogo} alt="MainLogo" draggable="false" />
          </StyledHeaderLogo>
          <StyledNavigationBlock>
            <StyledNavigationShopPage>shop</StyledNavigationShopPage>
            <StyledDiscoverPage>discover</StyledDiscoverPage>
            <StyledHelpPage>help</StyledHelpPage>
          </StyledNavigationBlock>
        </StyledLeftBlock>
        <StyledRightBlock>
          <StyledMenuAccount onClick={handleCallMenuAccount}>
            <img src={MenuAccount} alt="Menu Account" draggable="false" />
            <div>Account</div>
          </StyledMenuAccount>
          <StyledCartButton onClick={handleToggleModal}>
            <img src={CartPicture} alt="Cart" />
            <div>Cart</div>
          </StyledCartButton>
        </StyledRightBlock>
      </StyledHeader>
      {isModalOpen && <ModalWindow handleCloseModal={handleCloseModal} />}
    </>
  );
};

export default Header;
