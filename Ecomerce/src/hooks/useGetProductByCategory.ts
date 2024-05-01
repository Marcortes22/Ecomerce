import { useEffect, useState } from "react";
import { categoryType } from "../types/Category";
import { getProductByCategory } from "../services/Products";

export function useGetProductByCategory() {
    const [productByCategory, setProductByCategory] = useState<categoryType[]>([]);
    const [id, setId] = useState<number>(0)
    const [showByCategory, setShowByCategory] = useState(false);

    useEffect(() => {
      async function getProduct() {
        if (id >= 1 && id <= 4) {
          try {
            const product = await getProductByCategory(id);
            setProductByCategory(product);
            setShowByCategory(true);
          } catch (error) {
            console.error("Error to get product by category", error);
          }
        }
      }
      getProduct();
    }, [id]);
    return { productByCategory, setId,showByCategory, setShowByCategory,id};
}