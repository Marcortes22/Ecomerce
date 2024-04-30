import { createContext } from "react";

type CategoriesContextType = {
    categoryId: number,
    setCategoryId: (id: number)=>void,
};

const CategoriesContext = createContext<CategoriesContextType>({
    categoryId: 0,
    setCategoryId: ()=>{}
});

export default CategoriesContext