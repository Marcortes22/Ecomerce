import {useContext, useEffect, useState } from 'react'
import { productType } from '../../types/Product'
import { getAllProducts } from '../../services/Products'
import ProductsContext from '../../context/ProductsContext'

export function useGetProduts() {

  const [products, setProducts] = useState<productType[]>([])

  const { categoryId,searchText,setSearchText, pageNumber } = useContext(ProductsContext)

  const [filteredProducts, setFilteredProducts] = useState<productType[]>([])


  useEffect(() => {
    async function getProducts() {
      try {
        const products = await getAllProducts(pageNumber)
        setProducts(products)
      } catch (error) {
        console.error('Error to get products', error)
      }
    }
    getProducts()
  }, [pageNumber])

  useEffect(() => {
    let result = products
  
    if (categoryId !== 0) {
      result = result.filter((product) => product.categoryId === categoryId)
    }
  
    if (searchText) {
      result = result.filter((product) => product.title.toLowerCase().includes(searchText.toLowerCase()))
    }
  
    setFilteredProducts(result)
  }, [categoryId, searchText, products])


  return { products, filteredProducts}
}
