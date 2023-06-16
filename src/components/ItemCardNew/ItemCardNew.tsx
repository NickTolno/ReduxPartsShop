import picSrc from "../../assets/partsPhotos/beam1x1.png";
import Typography from "../../assets/fonts/FontStyles/Typography";
import Button from "../ui/Button/Button";
import {
  Wrapper,
  StyledImage,
  InfoAndButton,
  PartNameAndPrice,
} from "./ItemCardNew.styles";

interface ItemCardNewTestProps {
  horizontal?: boolean;
}

const ItemCardNew = ({ horizontal = false }: ItemCardNewTestProps) => {
  return (
    <Wrapper horizontal={horizontal}>
      <StyledImage src={picSrc} alt="product-pic" />
      <InfoAndButton>
        <Typography>BESTSELLER</Typography>
        <PartNameAndPrice>
          <Typography>PLATE 2X2, W/ REDUCED KNOBS1234</Typography>
          <Typography>$0.07</Typography>
        </PartNameAndPrice>
        <Typography>ID: 6126082/23893</Typography>
        <Button onClick={() => console.log("fuck you")}>ADD TO CART</Button>
      </InfoAndButton>
    </Wrapper>
  );
};

export default ItemCardNew;
