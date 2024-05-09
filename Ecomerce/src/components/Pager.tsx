import { useContext } from "react";
import ProductsContext from "../context/ProductsContext";



const Pager = () => {
    let pages = [1,2,3,4,5,6,7,8,9,10];
 
    const {setPageNumber} = useContext(ProductsContext);
  
    const handleChangePage = (value: number) => {
      setPageNumber(value);
    };

    return (

        <div className='pager'>
      { pages.map((item) => (
        <button 
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
          key={item} 
          onClick={()=>handleChangePage(item)}>{item}</button>
      )) }         
    </div>
    );
}

export default Pager;



