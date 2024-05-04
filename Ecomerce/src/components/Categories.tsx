import { useGetCategories } from '../hooks/useGetCategories'
import { categoryType } from '../types/Category'
import SingleCategory from './SingleCategory'

export default function Categories() {
  const { categories } = useGetCategories()

  return <>
    <nav className='flex items-center justify-center py-4 md:py-8 flex-wrap'>
      {
        categories.map((categorysResult: categoryType) => (
          <SingleCategory key={categorysResult.id} category={categorysResult} >
          </SingleCategory>
        ))
      }
    </nav>
  </>
}
