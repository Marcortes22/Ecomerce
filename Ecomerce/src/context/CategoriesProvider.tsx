import { useState } from "react"
import CategoriesContext from "./CategoriesContext"

const CategoriesProvider = ({ children }: { children: React.ReactNode }) => {
    const [categoryId, setCategoryId] = useState(0)
    return (
        <CategoriesContext.Provider value={{ categoryId, setCategoryId }}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider