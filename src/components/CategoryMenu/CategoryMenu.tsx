import { useState, useEffect } from "react";
import {
  StyledCategoryMenuContainer,
  StyledSearchInputContainer,
  StyledSearchTitle,
  StyledSearchInput,
  StyledSearchCategoryTitle,
  StyledCategoriesChoise,
  StyledSearchInputColorContainer,
  StyledSearchTitleColor,
  StyledSearchInputColor,
} from "../CategoryMenu/CategoryMenu.styles";
import CategoryMenuComponent from "../CategoryMenu/CategoryMenuComponent/CategoryMenuComponent";
import Typography, { FontType } from "../../assets/fonts/FontStyles/Typography";
import categoriesNames, { PropsCategory } from "../../data/categoriesNames";
import InputFieldCategory from "../ui/InputFieldCategory/InputFieldCategory";

const CategoryMenu = () => {
  const [scrollStopped, setScrollStopped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const stopPosition = 192;

      if (scrollPosition >= stopPosition) {
        setScrollStopped(true);
      } else {
        setScrollStopped(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledCategoryMenuContainer className={scrollStopped ? "stopped" : ""}>
      <StyledSearchInputContainer>
        <StyledSearchTitle>
          <Typography fontType={FontType.CategoryName}>Search</Typography>
        </StyledSearchTitle>
        <StyledSearchInput>
          <InputFieldCategory />
        </StyledSearchInput>
      </StyledSearchInputContainer>
      <StyledSearchCategoryTitle>
        <Typography fontType={FontType.CategoryName}>Category</Typography>
      </StyledSearchCategoryTitle>
      <StyledCategoriesChoise>
        {categoriesNames.map((item: PropsCategory) => (
          <CategoryMenuComponent
            categoryName={item.categoryName}
            counterParts={item.counterParts}
          />
        ))}
      </StyledCategoriesChoise>
      <StyledSearchInputColorContainer>
        <StyledSearchTitleColor>
          <Typography fontType={FontType.CategoryName}>Color</Typography>
        </StyledSearchTitleColor>
        <StyledSearchInputColor>
          <InputFieldCategory />
        </StyledSearchInputColor>
      </StyledSearchInputColorContainer>
    </StyledCategoryMenuContainer>
  );
};

export default CategoryMenu;
