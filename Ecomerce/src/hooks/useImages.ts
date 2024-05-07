import { ChangeEvent, useState } from 'react'

export default function useImages() {
    const [images, setImages] = useState<string[]>([""])

    const handleImageChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newImages = [...images]
        newImages[index] = event.target.value
        setImages(newImages)
    }

    const addImageField = () => {
        setImages([...images, ''])
    }

    return { images,setImages, handleImageChange, addImageField }
}