import { productType } from "../types/Product";

export default function SingleProduct({ product }: { product: productType }) {
  return (
    <>
      <article className=" flex  flex-col w-80 max-h-[500px]  p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <img
          className="w-full h-3/4 object-cover rounded-t-lg "
          alt="Card Image"
          src={product.images[0]}
        ></img>
        <div className="p-4  flex flex-col justify-between  flex-1">
          <div>
            <h2 className="text-xl  font-semibold">{product.title}</h2>
            <p className="text-gray-600 ">$ {product.price}</p>
          </div>
          <div className="flex justify-center items-center mt-4 h-max ">
            <button className="  bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">
              Show more
            </button>
          </div>
        </div>
      </article>
    </>
  );
}
