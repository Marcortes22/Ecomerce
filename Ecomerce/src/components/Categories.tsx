import { useGetCategories } from "../hooks/useGetCategories";
import { categoryType } from "../types/Category";
import SingleCategory from "./SingleCategory";

export default function Categories() {
  const { categories } = useGetCategories()
  return <>
    <nav>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">
        Our Categories
      </h2>
      <section className="flex columns-4 justify-center">
        {
          categories.map((categorysResult: categoryType) => (
            <SingleCategory key={categorysResult.id} category={categorysResult} >
            </SingleCategory>
          ))
        }
      </section>
    </nav>
  </>
}
