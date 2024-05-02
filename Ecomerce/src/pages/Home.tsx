import Categories from "../components/Categories";
import Products from "../components/Products";
import ProductsProvider from "../context/ProductsProvider";

export default function Home() {
  return <>
    <ProductsProvider>
      <Categories />
      <Products />
    </ProductsProvider>
  </>;
}
