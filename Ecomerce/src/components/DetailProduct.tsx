import { useParams } from "react-router-dom";
import { useGetProdutById } from "../hooks/Products/useGetProductById";
import Gallery from "./Gallery";
import Spinner from "./Spinner";
export default function DetailProduct() {
  const { categoryId, productId } = useParams<{
    categoryId: string;
    productId: string;
  }>();

  if (!categoryId || !productId) {
    return <div></div>;
  }

  const { product, loading } = useGetProdutById(categoryId, productId);

  return (
    <>
      {product ? (
        <div>
          <Gallery images={product.images}></Gallery>
        </div>
      ) : (
        <Spinner></Spinner>
      )}
    </>
  );
}
