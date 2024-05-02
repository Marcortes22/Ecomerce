import { productType } from "../types/Product";
import SingleProduct from "./SingleProduct";
import { useGetProduts } from "../hooks/useGetProducts";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";

export default function Products() {
  const { products } = useGetProduts()
  const { categoryId } = useContext(ProductsContext)
  const [filteredProducts, setFilteredProducts] = useState<productType[]>([])

  useEffect(() => {
    if (categoryId === 0) {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.categoryId === categoryId))
    }
  }, [categoryId, products])



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
