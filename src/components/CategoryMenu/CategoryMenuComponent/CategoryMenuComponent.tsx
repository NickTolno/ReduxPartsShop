import CategoryMenuSelectButton from "../../ui/CategoryMenuSelectButton/CategoryMenuSelectButton";
import { styled } from "styled-components";
import Typography, {
  FontType,
} from "../../../assets/fonts/FontStyles/Typography";
import { PropsCategory } from "../../../data/categoriesNames";

const StyledCategoryItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  width: 17.25rem;
  height: 1.5rem;
`;

const CategoryMenuComponent = (props: PropsCategory) => {
  return (
    <StyledCategoryItem>
      <CategoryMenuSelectButton />
      <Typography fontType={FontType.CategoryItem}>
        {props.categoryName} [{props.counterParts}]
      </Typography>
    </StyledCategoryItem>
  );
};

export default CategoryMenuComponent;
