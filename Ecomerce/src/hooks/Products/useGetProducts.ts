import { useContext, useEffect, useState } from "react";
import { productType } from "../../types/Product";
import { getProductByCategory } from "../../services/Products";
import ProductsContext from "../../context/ProductsContext";

export function useGetProduts() {
  const { categoryId, page, searchText } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState<productType[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const productsResult = await getProductByCategory(
          categoryId,
          page,
          searchText
        );
        setFilteredProducts(productsResult);
      } catch (error) {
        console.error("Error to get products", error);
      }
    }
    getProducts();
  }, [categoryId, page, searchText]);

  return { filteredProducts };
}
