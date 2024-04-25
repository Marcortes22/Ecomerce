import { useGetCategories } from "../hooks/useGetCategories";
import { categoryType } from "../types/Category";
import SingleCategory from "./SingleCategory";

export default function Categories() {
  const { categories } = useGetCategories()
  return <>
    <section>
      {
        categories.map((categorysResult: categoryType) => (
          <SingleCategory key={categorysResult.id} category={categorysResult} >
          </SingleCategory>
        ))
      }
    </section>
  </>;
}
