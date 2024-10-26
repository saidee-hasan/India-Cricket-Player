import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CartContainer from "./components/CardContainer/CartContainer";
import Cart from "./components/Card/Card";
import Selected from "./components/Selected/Selected";
import { Bounce, toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,
    status: "cart",
  });



  const handleIsActive = (status) => {
    if (status == "cart") {
      setIsActive({
        cart: true,
        status: "active",
      });
    } else {
      setIsActive({
        cart: false,
        status: "selected",
      });
    }
  };

  const [price, setPrice] = useState(0); // Initial price

const handleIncreaseProduct = (pr)=>{
  if(price > 0){
    setPrice(price - pr)
  }
  



}
  const handleClaimPrice = () => {
    setPrice((prevPrice) => prevPrice + 10000); // Double the price
  };

  const [addProduct, setAddProduct] = useState([]);

  const addTost = (id) => {
    toast(`🦄 ${id}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleDelete = (id)=>{
    console.log(id)
const removeProduct = addProduct.filter(p=> p.name !== id)
  setAddProduct(removeProduct)

}

  const handleAddProduct = (product) => {

    const isExist = addProduct.find((p) => p.name == product.name);


    if(price > 0){
      if (isExist) {
        addTost("Faild");
  
      } else {
  
      
        if(addProduct.length <= 6 ){
          handleIncreaseProduct(product.price)
          const newCart = [...addProduct, product];
          setAddProduct(newCart);
          addTost(product.name);
        }else{
          addTost("After 7  ");
        } 
    }

    }else{
      addTost("LOw blance ");
    }
  };


console.log(addProduct)
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
      <Navbar price={price} />
      <Header handleClaimPrice={handleClaimPrice} />

      <CartContainer addProduct={addProduct}  handleIsActive={handleIsActive} isActive={isActive} />

      {isActive.cart ? (
        <Cart handleAddProduct={handleAddProduct} />
      ) : (
        <Selected addProduct={addProduct} handleDelete={handleDelete} />
      )}
    </div>
  );
}

export default App;
