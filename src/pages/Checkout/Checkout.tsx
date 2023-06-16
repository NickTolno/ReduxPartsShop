import ItemCardModal from "../../components/ItemCard/ItemCardModal/ItemCardModal";
import { StyledHome } from "../Home/Home.styles";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import dataProducts, { IItemCard } from "../../data/dataProducts";

const Checkout = () => {
  return (
    <PageTemplate>
      <StyledHome>
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
      </StyledHome>
    </PageTemplate>
  );
};

export default Checkout;
