import { useContext, useEffect, useState } from "react";
import { productType } from "../../types/Product";
import { getAllProducts, getProductByCategory } from "../../services/Products";
import ProductsContext from "../../context/ProductsContext";

export function useGetProduts() {
  const [products, setProducts] = useState<productType[]>([]);
  const { categoryId, page } = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState<productType[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const productsResult = await getProductByCategory(0, 1);
        setProducts(productsResult);
        setFilteredProducts(productsResult);
        console.log(productsResult);
      } catch (error) {
        console.error("Error to get products", error);
      }
    }
    getProducts();
  }, []);

  useEffect(() => {
    async function getProducts() {
      try {
        const productsResult = await getProductByCategory(categoryId, page);
        setFilteredProducts(productsResult);
        console.log(productsResult);
      } catch (error) {
        console.error("Error to get products", error);
      }
    }
    getProducts();
  }, [categoryId, page]);

  return { products, filteredProducts };
}
