import { categoryType } from "../types/Category";
import { getCategoryById } from "../services/Categories";
import { useEffect, useState } from "react";


export function useGetCategoriesById(id: number) {
  const [category, setCategory] = useState<categoryType | null>(null);
  useEffect(() => {
    async function getCategory() {
      try {
        const category = await getCategoryById(id);
        setCategory(category);
      } catch (error) {
        console.error("Error to get category", error);
      }
    }
    getCategory();
  }, [id]);

  return { category };
}