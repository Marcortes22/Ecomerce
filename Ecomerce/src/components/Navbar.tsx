import { Link } from "react-router-dom";
import { useGetCategories } from "../hooks/Categories/useGetCategories";
import { categoryType } from "../types/Category";
import Search from "./Search";
import SingleCategory from "./SingleCategory";
import { useState } from "react";
import CategoriesIcon from "./CategoriesIcon";

function Navbar() {
  const { categories } = useGetCategories();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex  items-center justify-between md:justify-center mx-auto p-4 md:gap-5">
        <div
          className={` flex flex-wrap  items-center  ${
            isOpen ? " flex-col gap-5" : "gap-5"
          }`}
        >
          <Link to="/" className="flex items-center gap-x-3">
            <img
              className="w-6 h-6 rounded-full"
              src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
              alt="user photo"
            />
            <span className="self-center md:text-xl font-semibold whitespace-nowrap dark:text-white">
              Homely
            </span>
          </Link>
          <Search isOpen={isOpen} />
        </div>

        <div className="flex items-center gap-3">
          <button
            className="block md:hidden text-blue-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CategoriesIcon></CategoriesIcon>
          </button>
          <ul
            className={`${
              isOpen ? "block" : "hidden"
            } md:flex flex-col md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}
          >
            {categories.map((category: categoryType) => (
              <SingleCategory
                key={category.id}
                category={category}
                setIsOpen={setIsOpen}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
