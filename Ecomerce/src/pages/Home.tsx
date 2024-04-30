import Categories from "../components/Categories";
import Products from "../components/Products";
import CategoriesProvider from "../context/CategoriesProvider";

export default function Home() {
  return <>
    <CategoriesProvider>
      <Categories />
      <Products />
    </CategoriesProvider>
  </>;
}
