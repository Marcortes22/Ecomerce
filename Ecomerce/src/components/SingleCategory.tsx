import { getCategoryById } from '../services/Categories'
import { categoryType } from '../types/Category'


export default function SingleCategory({ category }: { category: categoryType }) {
  return <>
    <button type='button'
      className=' bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 py-2.5 me-3 mb-3 font-semibold'
      onClick={() => getCategoryById(category.id)}
    >
      {category.name}
    </button>
  </>
}
