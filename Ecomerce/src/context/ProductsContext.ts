import React from 'react'

type ProductsContextType = {
    categoryId: number,
    setCategoryId: (id: number)=>void,
    searchText: string,
    setSearchText: (text: string)=>void,
}
//COMPLETAR EL CONTEXT CON LO QUE NECESITE
const ProductsContext = React.createContext<ProductsContextType>({
    categoryId: 0,
    setCategoryId: ()=>{},
    searchText: '',
    setSearchText: ()=>{},
})

export default ProductsContext