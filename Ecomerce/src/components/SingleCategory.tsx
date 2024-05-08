import { useContext } from "react";
import { categoryType } from "../types/Category";
import ProductsContext from "../context/ProductsContext";

export default function SingleCategory({
  category,
  setIsOpen,
}: {
  category: categoryType;
  setIsOpen: (open: boolean) => void;
}) {
  const { setCategoryId } = useContext(ProductsContext);

  const handleClick = () => {
    setCategoryId(category.id);
  };

  return (
    <>
      <li
        onClick={() => {
          handleClick();
          setIsOpen(false);
        }}
        className="relative py-2 px-3  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer"
        aria-current="page"
      >
        {category.name}
      </li>
    </>
  );
}
