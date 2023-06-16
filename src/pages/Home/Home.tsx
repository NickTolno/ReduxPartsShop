import ItemCard from "../../components/ItemCard/ItemCardShop/ItemCard";
import {
  StyledHome,
  StyledBannerWindow,
  StyledMainShopPageContainer,
  StyledReadCrumbs,
  StyledBuyInfo,
  StyledSearchConfigField,
  StyledSearchResultField,
  StyledSearchResultItemsNames,
  StyledSearchResultProduct,
} from "./Home.styles";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import dataProducts, { IItemCard } from "../../data/dataProducts";
import Banner from "../../assets/Photos/banner.svg";
import Typography, { FontType } from "../../assets/fonts/FontStyles/Typography";
import CategoryMenu from "../../components/CategoryMenu/CategoryMenu";

const Home = () => {
  return (
    <PageTemplate>
      <StyledHome>
        <StyledBannerWindow>
          <img
            src={Banner}
            alt="banner"
            style={{ width: "100%", height: "auto" }}
          />
        </StyledBannerWindow>
        <StyledMainShopPageContainer>
          <Typography fontType={FontType.CategoryName}>
            <StyledReadCrumbs>
              <div>Home</div>
              <div>{">"}</div>
              <div>LEGO® Parts</div>
              <div>{">"}</div>
              <div>Technic Beams</div>
            </StyledReadCrumbs>
          </Typography>
          <Typography fontType={FontType.Body}>
            <StyledBuyInfo>
              <div>
                Can I buy a LEGO® part separately? Yes, you can. Here you will
                find all kinds of LEGO® bricks that you can order separately.
              </div>
            </StyledBuyInfo>
          </Typography>
          <StyledSearchConfigField>
            <CategoryMenu />
            <StyledSearchResultField>
              <StyledSearchResultItemsNames>
                <Typography fontType={FontType.SubCategoryName}>
                  Showing 1-15 of 669 results
                </Typography>
              </StyledSearchResultItemsNames>
              <StyledSearchResultProduct>
                {dataProducts.map((item: IItemCard) => (
                  <ItemCard
                    key={item.id}
                    vendorCode={item.vendorCode}
                    namePosition={item.namePosition}
                    photo={item.photo}
                    price={item.price}
                    specialSuggestion={item.specialSuggestion}
                  />
                ))}
              </StyledSearchResultProduct>
            </StyledSearchResultField>
          </StyledSearchConfigField>
        </StyledMainShopPageContainer>
      </StyledHome>
    </PageTemplate>
  );
};

export default Home;
