import { productType } from "../types/Product";
import SingleProduct from "./SingleProduct";
import { useGetProduts } from "../hooks/useGetProducts";
// import { useGetProductByCategory } from "../hooks/useGetProductByCategory";

export default function Products() {
  const { products } = useGetProduts();
  // const { productByCategory, isLoading } = useGetProductByCategory()

  // if (isLoading) <p>Isloading..</p>

  // console.log(productByCategory)

  return (
    <>
      <section className="grid grid-cols-4 gap-y-5">
        {products?.map((productResult: productType) => (
          <SingleProduct
            key={productResult.id}
            product={productResult}
          ></SingleProduct>
        ))}
      </section>
    </>
  );
}
