import { useEffect, useState } from "react";
import { productType } from "../types/Product";
import { getAllProducts } from "../services/Products";

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

  return { products };
}
