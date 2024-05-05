import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createProduct, getAllProducts } from "../services/Products";
import { productType } from "../types/Product";
import { useNavigate } from "react-router-dom";

export default function usePostProducts() {
    const { register, handleSubmit, setValue } = useForm();
    const navigate = useNavigate();
    const [nextProductId, setNextProductId] = useState(0);
    const [images, setImages] = useState(['']);
    

    useEffect(() => {
        async function fetchNextProductId() {
            const allProducts = await getAllProducts();
            const maxId = Math.max(...allProducts.map(product => product.id));
            setNextProductId(maxId + 1);
        }

        fetchNextProductId();
    }, []);

    useEffect(() => {
        setValue("id", nextProductId);
    }, [nextProductId, setValue]);

    const OnSubmit = handleSubmit(async (data) => {
        console.log("Submitted")

        const productData: productType = JSON.parse(JSON.stringify(data))

        try {
            await createProduct(data.categoryId, productData)
            navigate("/")
        } catch (error) {
            console.error("Error creating product:", error)
        }
    })

    const handleImageChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newImages = [...images];
        newImages[index] = event.target.value;
        setImages(newImages);
    };

    const addImageField = () => {
        setImages([...images, '']);
    }
    return { register, OnSubmit, nextProductId, handleImageChange, addImageField, images};
}