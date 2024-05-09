import { useContext, useEffect, useState } from "react";
import ProductsContext from "../context/ProductsContext";

export default function Pagination() {
  const { page, setPage } = useContext(ProductsContext);
  const [currentPage, setCurrentPage] = useState(1);

  function incrementPage() {
    setPage(page + 1);
  }
  function decrementPage() {
    setPage(page - 1);
  }

  function setPageNumber(pageNumber: number) {
    setPage(pageNumber);
  }
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);
  return (
    <>
      <nav className="flex items-center justify-center my-7">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <a
              onClick={decrementPage}
              href="#"
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </a>
          </li>

          {Array.from({ length: 5 }, (_, index) => index + 1).map(
            (pageNumber) => (
              <li key={pageNumber}>
                <a
                  onClick={() => setPageNumber(pageNumber)}
                  href="#"
                  className={`${
                    currentPage === pageNumber
                      ? "text-white text-xl"
                      : "hover:bg-gray-300 "
                  } flex items-center justify-center px-4 h-10 leading-tight  text-gray-500 dark:bg-gray-800`}
                >
                  {pageNumber}
                </a>
              </li>
            )
          )}

          <li>
            <a
              onClick={incrementPage}
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
