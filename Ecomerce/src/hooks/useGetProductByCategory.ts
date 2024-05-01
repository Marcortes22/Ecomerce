import { useEffect, useState } from "react";
import { categoryType } from "../types/Category";
import { getProductByCategory } from "../services/Products";

export function useGetProductByCategory(id: number) {
    const [productByCategory, setProductByCategory] = useState<categoryType | null>(null);

    useEffect(() => {
      async function getProduct() {
        try {
          const product = await getProductByCategory(id);
          setProductByCategory(product);
        } catch (error) {
          console.error("Error to get product by category", error);
        }
      }
      getProduct();
    }, [id]);
  
    return { productByCategory };
}