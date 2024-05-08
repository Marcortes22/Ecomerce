import Navbar from "../components/Navbar";
import Products from "../components/Products";
import ProductsProvider from "../context/ProductsProvider";

export default function Home() {
  return (
    <>
      <ProductsProvider>
        <Navbar></Navbar>
        <Products></Products>
      </ProductsProvider>
    </>
  );
}
