import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { createProduct, getAllProducts } from '../../services/Products'
import { productType } from '../../types/Product'
import { useNavigate } from 'react-router-dom'
import useImages from '../useImages'

export default function usePostProducts() {

    const { register, handleSubmit, setValue } = useForm()
    const { images, handleImageChange, addImageField } = useImages()
    const navigate = useNavigate()
    const [nextProductId, setNextProductId] = useState(0)
    
    useEffect(() => {
        async function fetchNextProductId() {
            const allProducts = await getAllProducts()
            const maxId = Math.max(...allProducts.map(product => product.id))
            setNextProductId(maxId + 1)
        }

        fetchNextProductId()
    }, [])

    useEffect(() => {
        setValue('id', nextProductId)
    }, [nextProductId, setValue])

    const OnSubmit = handleSubmit(async (data) => {
        console.log('Submitted')

        const productData: productType = JSON.parse(JSON.stringify(data))

        try {
            await createProduct(data.categoryId, productData)
            navigate('/')
        } catch (error) {
            console.error('Error creating product:', error)
        }
    })

    return { register, OnSubmit, nextProductId, handleImageChange, addImageField, images}
}