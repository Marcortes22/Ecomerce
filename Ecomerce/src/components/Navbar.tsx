import { Link } from "react-router-dom";
import { useGetCategories } from "../hooks/Categories/useGetCategories";
import { categoryType } from "../types/Category";
import Search from "./Search";
import SingleCategory from "./SingleCategory";
import { useEffect, useState } from "react";
import CategoriesIcon from "./CategoriesIcon";
import { useAuth0 } from "@auth0/auth0-react";
import HomeIcon from "./HomeIcon";

function Navbar() {
  const { categories } = useGetCategories();

  const [isOpen, setIsOpen] = useState(false);

  const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  useEffect(() => {
    console.log(user);
  }, [isAuthenticated]);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className=" flex  items-center justify-between md:justify-center mx-auto p-4 md:gap-5">
        <div
          className={` flex flex-wrap gap-5 items-center  ${
            isOpen ? " flex-col " : "flex-row"
          }`}
        >
          {isAuthenticated ? (
            <div className="flex gap-4">
              <button
                onClick={() => logout()}
                className="text-md  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Log Out
              </button>

              <div className="flex flex-col items-center justify-center">
                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.picture}
                  alt="user photo"
                />
                <span className="text-white align-text-center">
                  {user?.given_name}
                </span>
              </div>
            </div>
          ) : (
            <div className="flex gap-4">
              <button
                onClick={() => loginWithRedirect()}
                className="text-md  text-blue-600 dark:text-blue-500 hover:underline"
              >
                Login
              </button>
              <img
                className="w-8 h-8 rounded-full"
                src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
                alt="user photo"
              />
            </div>
          )}

          <Search isOpen={isOpen} />
          <Link to="/" className="flex items-center gap-x-3">
            <button className="self-center md:text-xl font-semibold whitespace-nowrap dark:text-white">
              <HomeIcon></HomeIcon>
            </button>
          </Link>
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
