import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Pager from "../components/Pager";
import Products from "../components/Products";
import ProductsProvider from "../context/ProductsProvider";

export default function Home() {
  return (
    <>
      <ProductsProvider>
        <Navbar></Navbar>
        <Products></Products>
        <Pager></Pager>
      
      </ProductsProvider>
    </>
  );
}
