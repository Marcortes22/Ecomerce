import { Link, useParams } from "react-router-dom";
import usePutProduct from "../hooks/Products/usePutProduct";
import Spinner from "./Spinner";

export default function UpdateProduct() {
  const { categoryId, productId } = useParams<{
    categoryId: string;
    productId: string;
  }>();

  if (!categoryId || !productId) {
    return <Spinner></Spinner>;
  }

  const { register, OnSubmit, images, handleImageChange, addImageField } =
    usePutProduct(categoryId, productId);

  return (
    <>
      <div className="bg-gray-600 max-h-fit p-10">
        <form className="max-w-sm mx-auto" onSubmit={OnSubmit}>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Id
            </label>
            <input
              type="text"
              {...register("id")}
              id="id"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              disabled
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              {...register("title")}
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="price"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <input
              type="number"
              {...register("price")}
              name="price"
              id="price"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="$100"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Description
            </label>
            <textarea
              {...register("description")}
              id="description"
              {...register("description")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            ></textarea>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Color
            </label>
            <input
              type="text"
              {...register("color")}
              id="color"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="rating"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Rating
            </label>
            <input
              type="text"
              {...register("rating")}
              id="rating"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="inStock"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              In Stock
            </label>
            <input
              type="number"
              {...register("inStock")}
              id="inStock"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Brand
            </label>
            <input
              type="text"
              {...register("brand")}
              id="brand"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
            />
          </div>
          <div className="col-span-2 sm:col-span-1 max-h-fit">
            <label
              htmlFor="Images"
              className="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Images
            </label>
            {images?.map((image, index) => (
              <input
                key={index}
                type="text"
                {...register(`images[${index}]`)}
                value={image}
                onChange={(event) => handleImageChange(index, event)}
                className="bg-gray-50 my-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              />
            ))}
            <button
              type="button"
              onClick={addImageField}
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Add Image
            </button>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <select
              {...register("categoryId")}
              id="category"
              required
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option>Select category</option>
              <option value="1">Clothes</option>
              <option value="2">Electronics</option>
              <option value="3">Furniture</option>
              <option value="4">Shoes</option>
              <option value="5">Sports & Outdoor</option>
            </select>
          </div>
          <section className=" gap-2 mt-2">
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              Save
            </button>
            <button
              type="button"
              className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              <Link to="/">Cancel</Link>
            </button>
          </section>
        </form>
      </div>
    </>
  );
}
