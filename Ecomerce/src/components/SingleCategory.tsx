import { useGetProductByCategory } from '../hooks/useGetProductByCategory'
import { categoryType } from '../types/Category'


export default function SingleCategory({ category }: { category: categoryType }) {

  const { setId,setShowByCategory } = useGetProductByCategory()

  const handleClick = () => {
    setId(category.id)
    setShowByCategory(true)
  }

  return <>
    <button type='button'
      className=' bg-blue-500 hover:bg-blue-600 text-white px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 py-2.5 me-3 mb-3 font-semibold'
      onClick={handleClick}
    >
      {category.name}
    </button>
  </>
}
