import { Link, useParams } from "react-router-dom";
import { useGetProdutById } from "../hooks/Products/useGetProductById";
import Gallery from "../components/Gallery";
import Spinner from "../components/Spinner";
import Rating from "../components/Rating";
import Navbar from "../components/Navbar";
export default function DetailProduct() {
  const { categoryId, productId } = useParams<{
    categoryId: string;
    productId: string;
  }>();

  if (!categoryId || !productId) {
    return <div></div>;
  }

  const { product } = useGetProdutById(categoryId, productId);

  return (
    <>
      {product ? (
        <section>
          <article className="w-full flex flex-col md:flex-row mt-10  justify-center px-5 gap-10">
            <div className=" flex justify-center">
              <Gallery images={product.images}></Gallery>
            </div>
            <div className=" flex flex-col gap-5 grow-0">
              <h1 className="text">{product.title}</h1>

              <div>
                <p>Price: {product.price}</p>
              </div>

              <div>
                <p className=" text-wrap">Description: {product.description}</p>
              </div>

              <div>
                <p>Color: {product.color}</p>
              </div>

              <div>
                <p>Stock: {product.inStock}</p>
              </div>

              <div>
                <p>Brand: {product.brand}</p>
              </div>

              <div className="flex gap-5">
                <p>Rating</p>
                <Rating rating={product.rating}></Rating>
              </div>
            </div>
          </article>
          <div className=" mt-10 flex justify-center gap-5">
            <Link to="/">
              <button className="py-2 px-4 mb-2   text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                Back
              </button>
            </Link>
            <Link to={`/UpdateProduct/${product.categoryId}/${product.id}`}>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                Update
              </button>
            </Link>
          </div>
        </section>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}
