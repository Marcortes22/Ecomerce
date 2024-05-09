import React from 'react'

type ProductsContextType = {
    categoryId: number,
    setCategoryId: (id: number)=>void,
    searchText: string,
    setSearchText: (text: string)=>void,
    pageNumber: number,
    setPageNumber: (value: number)=>void,
}
//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext<ProductsContextType>({
    categoryId: 0,
    setCategoryId: ()=>{},
    searchText: '',
    setSearchText: ()=>{},
    pageNumber: 1,
    setPageNumber: (value: number)=>{}
    
})

export default ProductsContext