import { productType } from "../types/Product";
import SingleProduct from "./SingleProduct";
import { useGetProduts } from "../hooks/useGetProducts";

export default function Products() {
  const { filteredProducts } = useGetProduts()
  return (
    <>
      <section className="grid grid-cols-4 gap-y-5">
        {filteredProducts?.map((productResult: productType) => (
          <SingleProduct
            key={productResult.id}
            product={productResult}
          ></SingleProduct>
        ))}
      </section>
    </>
  );
}
