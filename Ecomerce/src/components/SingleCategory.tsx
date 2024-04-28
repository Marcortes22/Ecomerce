import { categoryType } from "../types/Category";
export default function SingleCategory({ category }: { category: categoryType }) {
  return <>
    <article className="flex-col w-60 max-h-[500px]  p-1 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-450 ease-in-out m-3">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl p-5 flex justify-center ">
        {category.name}
      </h3>
      <img src={category.image} alt={category.name} className="w-full h-3/4 object-cover rounded" />
    </article>
  </>
}
