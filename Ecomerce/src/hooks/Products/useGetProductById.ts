import { useEffect, useState } from "react";
import { productType } from "../../types/Product";
import { getProductById } from "../../services/Products";

export function useGetProdutById(CategoryId: string, ProductId: string) {
  const [product, setProduct] = useState<productType>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function getProduct() {
      try {
        const product = await getProductById(CategoryId, ProductId);
        setProduct(product);
        setLoading(true);
      } catch (error) {
        console.error("Error to get product", error);
      }
    }

    getProduct();
  }, []);

  return { product, loading };
}
