import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { productType } from "../../types/Product";
import { ChangeEvent, useEffect, useState } from "react";
import { useGetProdutById } from "./useGetProductById";
import { updateProduct } from "../../services/Products";

export default function usePutProduct(categoryId: string, productId: string) {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const { product } = useGetProdutById(categoryId, productId);
  const [images, setImages] = useState<string[]>([""]);

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
    console.log(productData);

    try {
      await updateProduct(categoryId, productId, productData);
      navigate("/");
    } catch (error) {
      console.error("Error uptating product:", error);
    }
  });

  const handleImageChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const newImages = [...images];
    newImages[index] = event.target.value;
    setImages(newImages);
  };

  const addImageField = () => {
    setImages([...images, ""]);
  };

  return { register, OnSubmit, images, handleImageChange, addImageField };
}
