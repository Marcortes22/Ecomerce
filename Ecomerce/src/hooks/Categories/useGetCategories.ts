import { useEffect, useState } from "react";
import { categoryType } from "../../types/Category";
import { getAllCategories } from "../../services/Categories";

export function useGetCategories() {
  const [categories, setCategories] = useState<categoryType[]>([]);
  useEffect(() => {
    async function getCategories() {
      try {
        const categories = await getAllCategories();
        setCategories(categories);
      } catch (error) {
        console.error("Error to get categories", error);
      }
    }
    getCategories();
  }, []);

  return { categories };
}
