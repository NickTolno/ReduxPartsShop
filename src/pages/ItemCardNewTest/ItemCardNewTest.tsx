import PageTemplate from "../../components/PageTemplate/PageTemplate";
import ItemCardNew from "../../components/ItemCardNew/ItemCardNew";

const ItemCardNewTest = () => {
  return (
    <PageTemplate>
      <ItemCardNew />
      <div style={{ height: "1rem" }}></div>
      <ItemCardNew horizontal />
    </PageTemplate>
  );
};

export default ItemCardNewTest;
