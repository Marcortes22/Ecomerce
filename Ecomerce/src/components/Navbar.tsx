import { useGetCategories } from '../hooks/useGetCategories'
import { categoryType } from '../types/Category'
import Search from './Search'
import SingleCategory from './SingleCategory'

function Navbar() {
  const { categories } = useGetCategories()
  return <>
    <nav className='bg-white border-gray-200 dark:bg-gray-900'>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a
          href='/home'
          className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img
            className='w-8 h-8 rounded-full'
            src='https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg'
            alt='user photo' />
          <span
            className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
            Homely
          </span>
        </a>
        <Search />
        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1' id='navbar-search'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
            {
              categories.map((category: categoryType) => (
                <SingleCategory key={category.id} category={category} />
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  </>
}

export default Navbar
