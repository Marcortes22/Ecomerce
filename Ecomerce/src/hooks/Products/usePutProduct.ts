import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { productType } from "../../types/Product";
import { useEffect } from "react";
import { useGetProdutById } from "./useGetProductById";
import { updateProduct } from "../../services/Products";
import useImages from "../useImages";

export default function usePutProduct(categoryId: string, productId: string) {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { product } = useGetProdutById(categoryId, productId);
  const { images, setImages, handleImageChange, addImageField } = useImages();

  useEffect(() => {
    setValue("id", product?.id);
    setValue("title", product?.title);
    setValue("price", product?.price);
    setValue("description", product?.description);
    setValue("color", product?.color);
    setValue("rating", product?.rating);
    setValue("inStock", product?.inStock);
    setValue("brand", product?.brand);
    setValue("images", product?.images);
    setImages(product?.images || [""]);
    setValue("categoryId", product?.categoryId);
  }, [product]);

  const OnSubmit = handleSubmit(async (data) => {
    console.log("Submitted");

    const productData: productType = JSON.parse(JSON.stringify(data));

    try {
      await updateProduct(categoryId, productId, productData);
      navigate(`/product/${categoryId}/${productId}`);
    } catch (error) {
      console.error("Error uptating product:", error);
    }
  });

  return { register, OnSubmit, images, handleImageChange, addImageField };
}
