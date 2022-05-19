import React, { createContext, useState, useEffect } from 'react';
import { getData } from '../services/HttpService';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const getProducts = async () => {
      const allProductsUrl = 'products';
      const featuredProductUrl = 'products?featured=true';
      // const productsUrl = 'products?category_exclude=414'; //414 IS THE FEATURED PRODUCTS CATEGORY;
      // Check WP functions.php file for enhancement

      setIsPending(true);

      // ALL PRODUCTS
      const woocomProducts = await getData(allProductsUrl);
      console.log('WOOCOM_All_Products DATA', woocomProducts.data);

      // // PRODUCTS WITHOUT FEATURED
      // const woocomProducts = await getData(productsUrl);
      // console.log('WOOCOMProducts DATA', woocomProducts.data);

      // FEATURED PRODUCTS
      const featuredProducts = await getData(featuredProductUrl);
      console.log('FEATURED Products DATA', featuredProducts.data);

      // SETTING STATES
      setProducts(woocomProducts.data);
      setFeatured(featuredProducts.data);
      setIsPending(false);
    };
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, featured, isPending }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContextProvider;
