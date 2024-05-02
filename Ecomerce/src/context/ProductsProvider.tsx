import { ReactNode, useState } from "react";
import ProductsContext from "./ProductsContext";

const ProductsProvider = ({ children }: { children: ReactNode }) => {
    const [categoryId, setCategoryId] = useState(0)
    return (
        <ProductsContext.Provider value={{ categoryId, setCategoryId }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;