import { categoryType } from "../types/Category";
export default function SingleCategory({ category }: { category: categoryType }) {
  return <>
    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl flex justify-center">
      {category.name}
    </h1>
  </>
}
