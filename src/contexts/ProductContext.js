import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export default function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [topProducts, setTopProducts] = useState([]);

    return(
        <ProductContext.Provider value={{
            products,
            setProducts,
            categories,
            setCategories,
            topProducts,
            setTopProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    );
}