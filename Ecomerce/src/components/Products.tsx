import { productType } from "../types/Product";
import SingleProduct from "./SingleProduct";
import { useGetProduts } from "../hooks/useGetProducts";
import { Link } from "react-router-dom";

export default function Products() {
  const { filteredProducts } = useGetProduts()
  return (
    <>
      <div className=" w-full">
        <button className="mx-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 mt-2">
          <Link to="/new">Add</Link>
        </button>
      </div>
      <section className="grid grid-cols-4 gap-y-5 mt-5">
        {filteredProducts?.map((productResult: productType) => (
          <SingleProduct
            key={productResult.id}
            product={productResult}
          ></SingleProduct>
        ))}
      </section>
    </>
  );
}
