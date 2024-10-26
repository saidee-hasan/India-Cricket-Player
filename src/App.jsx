import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import CartContainer from "./components/CardContainer/CartContainer";
import Cart from "./components/Card/Card";
import Selected from "./components/Selected/Selected";
import { Bounce, toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setIsActive] = useState({
    cart: true,

    status: "cart",
  });

  const [price, setPrice] = useState(0); // Initial price

  const [addProduct, setAddProduct] = useState([]);

  const handleIsActive = (status) => {
    setIsActive({
      cart: status === "cart",

      status: status === "cart" ? "active" : "selected",
    });
  };

  const handleIncreaseProduct = (amount) => {
    if (price > 0) {
      setPrice((prevPrice) => Math.max(prevPrice - amount, 0)); // Prevent price from going below 0
    }
  };

  const handleClaimPrice = () => {
    setPrice((prevPrice) => prevPrice + 10000); // Increase price by 10,000
  };

  const addToast = (message) => {
    toast(`🦄 ${message}`, {
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

  const handleDelete = (id) => {
    console.log(`Deleting product with id: ${id}`);

    const updatedProducts = addProduct.filter((product) => product.name !== id);

    setAddProduct(updatedProducts);

    addToast(`Removed ${id} from cart`);
  };

  const handleAddProduct = (product) => {
    const isExist = addProduct.find((p) => p.name === product.name);

    if (price > 0) {
      if (isExist) {
        addToast("Product already exists in the cart.");
      } else {
        if (addProduct.length < 7) {
          // Allow only up to 6 products

          handleIncreaseProduct(product.price);

          setAddProduct((prevProducts) => [...prevProducts, product]);

          addToast(`Added ${product.name} to cart`);
        } else {
          addToast("You cannot add more than 6 products.");
        }
      }
    } else {
      addToast("Low balance, please increase your funds.");
    }
  };

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

      <CartContainer
        addProduct={addProduct}
        handleIsActive={handleIsActive}
        isActive={isActive}
      />

      {isActive.cart ? (
        <Cart handleAddProduct={handleAddProduct} />
      ) : (
        <Selected addProduct={addProduct} handleDelete={handleDelete}  handleIsActive={handleIsActive} />
      )}

<Footer/>

    </div>
  );
}

export default App;
