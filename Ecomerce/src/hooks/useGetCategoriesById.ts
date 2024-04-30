import { categoryType } from "../types/Category";

import { useEffect, useState } from "react";
import { getProductByCategory } from "../services/Products";


export function useGetCategoriesById(id: number) {
  const [category, setCategory] = useState<categoryType | null>(null);
  useEffect(() => {
    async function getCategory() {
      try {
        const category = await getProductByCategory(id);
        setCategory(category.id);
      } catch (error) {
        console.error("Error to get category", error);
      }
    }
    getCategory();
  }, [id]);

  return { category };
}