import React, {useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify"

import TopMenu from "./components/TopMenu/TopMenu";
import useFetch from "./hooks/useFetch";
import { URL_API, STORAGE_PRODUCTS_CART } from "./utils/constants";
import Products from "./components/Products/Products";

function App() {
    const products = useFetch(URL_API)
    const [productsCart, setProductsCart] = useState([])

    useEffect(() => {
      getProductsCart()
    }, [])

    const getProductsCart = () => {
      const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART)

      if(idsProducts) {
        const idsProduct = idsProducts.split(',')
        setProductsCart(idsProduct)
      } else {
        setProductsCart([])
      }
    }

    const addProductCart = (id, name) => {
      const idsProducts = productsCart;
      idsProducts.push(id);
      setProductsCart(idsProducts);
      localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
      getProductsCart();
      toast.success(`${name} añadido al carrito`)
  }
    
  return (
    <div className="App">
      <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products}/>
      <Products products={products} addProductCart={addProductCart}/>
      <ToastContainer position="bottom-left" autoClose={3000} newestOnTop closeButton={false} rtl={false} draggable pauseOnHover={false}/>
    </div>
  );
}

export default App;
