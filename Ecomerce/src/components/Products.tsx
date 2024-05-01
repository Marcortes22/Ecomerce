import { productType } from "../types/Product";
import SingleProduct from "./SingleProduct";
import { useGetProduts } from "../hooks/useGetProducts";
import { useGetProductByCategory } from "../hooks/useGetProductByCategory";

export default function Products() {
  const { products } = useGetProduts();
  const { productByCategory, showByCategory } = useGetProductByCategory();

  const productsList = showByCategory ? productByCategory : products

  return (
    <>
      <section className="grid grid-cols-4 gap-y-5">
        {productsList?.map((productResult) => (
          <SingleProduct
            key={productResult.id}
            product={productResult as productType}
          ></SingleProduct>
        ))}
      </section>
    </>
  );
}
