import "../../../index.css";
import {
  StyledH1,
  StyledH1Underline,
  StyledCategoryName,
  StyledCategoryNameUnderline,
  StyledSubCategoryName,
  StyledCategoryItem,
  StyledBody,
  StyledPage,
  StyledCurrentPage,
  StyledButton,
  StyledProductNameM,
  StyledProductDescriptionM,
  StyledPriceM,
  StyledCaptionM,
  StyledProductNameS,
  StyledProductDescriptionS,
  StyledPriceS,
  StyledTotalSumS,
  StyledCaptionS,
  StyledIconName,
  StyledClearLink,
  StyledDefault,
} from "../FontStyles/font.styles";

export enum FontType {
  H1 = "H1",
  H1Underline = "H1Underline",
  CategoryName = "CategoryName",
  CategoryNameUnderline = "CategoryNameUnderline",
  SubCategoryName = "SubCategoryName",
  CategoryItem = "CategoryItem",
  Body = "Body",
  Page = "Page",
  CurrentPage = "CurrentPage",
  Button = "Button",
  ProductNameM = "ProductNameM",
  ProductDescriptionM = "ProductDescriptionM",
  PriceM = "PriceM",
  CaptionM = "CaptionM",
  ProductNameS = "ProductNameS",
  ProductDescriptionS = "ProductDescriptionS",
  PriceS = "PriceS",
  TotalSumS = "TotalSumS",
  CaptionS = "CaptionS",
  IconName = "IconName",
  ClearLink = "ClearLink",
}

interface TypographyProps {
  children: React.ReactNode;
  fontType?: FontType;
}

const Typography = ({
  fontType = FontType.Body,
  children,
}: TypographyProps) => {
  switch (fontType) {
    case FontType.H1:
      return <StyledH1>{children}</StyledH1>;
    case FontType.H1Underline:
      return <StyledH1Underline>{children}</StyledH1Underline>;
    case FontType.CategoryName:
      return <StyledCategoryName>{children}</StyledCategoryName>;
    case FontType.CategoryNameUnderline:
      return (
        <StyledCategoryNameUnderline>{children}</StyledCategoryNameUnderline>
      );

    case FontType.SubCategoryName:
      return <StyledSubCategoryName>{children}</StyledSubCategoryName>;
    case FontType.CategoryItem:
      return <StyledCategoryItem>{children}</StyledCategoryItem>;
    case FontType.Body:
      return <StyledBody>{children}</StyledBody>;
    case FontType.Page:
      return <StyledPage>{children}</StyledPage>;
    case FontType.CurrentPage:
      return <StyledCurrentPage>{children}</StyledCurrentPage>;
    case FontType.Button:
      return <StyledButton>{children}</StyledButton>;
    case FontType.ProductNameM:
      return <StyledProductNameM>{children}</StyledProductNameM>;
    case FontType.ProductDescriptionM:
      return <StyledProductDescriptionM>{children}</StyledProductDescriptionM>;
    case FontType.PriceM:
      return <StyledPriceM>{children}</StyledPriceM>;
    case FontType.CaptionM:
      return <StyledCaptionM>{children}</StyledCaptionM>;
    case FontType.ProductNameS:
      return <StyledProductNameS>{children}</StyledProductNameS>;
    case FontType.ProductDescriptionS:
      return <StyledProductDescriptionS>{children}</StyledProductDescriptionS>;
    case FontType.PriceS:
      return <StyledPriceS>{children}</StyledPriceS>;
    case FontType.TotalSumS:
      return <StyledTotalSumS>{children}</StyledTotalSumS>;
    case FontType.CaptionS:
      return <StyledCaptionS>{children}</StyledCaptionS>;
    case FontType.IconName:
      return <StyledIconName>{children}</StyledIconName>;
    case FontType.ClearLink:
      return <StyledClearLink>{children}</StyledClearLink>;

    default:
      return <StyledDefault>{children}</StyledDefault>;
  }
};

export default Typography;
