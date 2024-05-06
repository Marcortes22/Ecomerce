import { useParams } from "react-router-dom";
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
          <Navbar></Navbar>

          <article className="w-full  flex mt-10  justify-center px-40 gap-10">
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
        </section>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}
