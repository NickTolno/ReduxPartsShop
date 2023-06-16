import Typography, { FontType } from "../../assets/fonts/FontStyles/Typography";

const TestFonts = () => {
  return (
    <span>
      <Typography fontType={FontType.H1}>BoldH1</Typography>

      <Typography fontType={FontType.H1Underline}>BoldH1Underline</Typography>

      <Typography fontType={FontType.CategoryName}>CategoryName</Typography>

      <Typography fontType={FontType.CategoryNameUnderline}>
        CategoryNameUnderline
      </Typography>

      <Typography fontType={FontType.SubCategoryName}>
        SubCategoryName
      </Typography>

      <Typography fontType={FontType.CategoryItem}>CategoryItem</Typography>

      <Typography fontType={FontType.Body}>Body</Typography>

      <Typography fontType={FontType.Page}>Page</Typography>

      <Typography fontType={FontType.CurrentPage}>CurrentPage</Typography>

      <Typography fontType={FontType.Button}>Button</Typography>

      <Typography fontType={FontType.ProductNameM}>ProductNameM</Typography>

      <Typography fontType={FontType.ProductDescriptionM}>
        ProductDescriptionM
      </Typography>

      <Typography fontType={FontType.PriceM}>PriceM</Typography>

      <Typography fontType={FontType.CaptionM}>CaptionM</Typography>

      <Typography fontType={FontType.ProductNameS}>ProductNameS</Typography>

      <Typography fontType={FontType.ProductDescriptionS}>
        ProductDescriptionS
      </Typography>

      <Typography fontType={FontType.PriceS}>PriceS</Typography>

      <Typography fontType={FontType.TotalSumS}>TotalSumS</Typography>

      <Typography fontType={FontType.CaptionS}>CaptionS</Typography>
    </span>
  );
};

export default TestFonts;
