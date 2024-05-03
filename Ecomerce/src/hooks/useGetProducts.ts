import { useContext, useEffect, useState } from "react";
import { productType } from "../types/Product";
import { getAllProducts } from "../services/Products";
import ProductsContext from "../context/ProductsContext";

export function useGetProduts() {
  const [products, setProducts] = useState<productType[]>([]);
  useEffect(() => {
    async function getProducts() {
      try {
        const products = await getAllProducts();
        setProducts(products);
      } catch (error) {
        console.error("Error to get products", error);
      }
    }
    getProducts();
  }, []);

  const { categoryId } = useContext(ProductsContext)
  const [filteredProducts, setFilteredProducts] = useState<productType[]>([])

  useEffect(() => {
    if (categoryId === 0) {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((product) => product.categoryId === categoryId))
    }
  }, [categoryId, products])

  return { products, filteredProducts}
}
