import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export default function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [topProducts, setTopProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    return(
        <ProductContext.Provider value={{
            products,
            setProducts,
            categories,
            setCategories,
            topProducts,
            setTopProducts,
            loading,
            setLoading
        }}>
            {props.children}
        </ProductContext.Provider>
    );
}