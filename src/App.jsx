import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Header/Header'
import AllProducts from './components/AllProducts/AllProducts';
import CartContainer from './components/CartContainer/CartContainer';


function App() {

const [isActive,setIsActive]=useState({
  cart:true,
  status:"cart"
})
const handleIsActive = (status)=>{
  if(status == 'cart'){
    setIsActive({
      cart:true,
      status:"active"
    })
  }else{
    setIsActive({
      cart:false,
      status:"selected"
    })
  }

}
console.log(isActive)
  const [price, setPrice] = useState(0); // Initial price

  const handleClaimPrice = () => {
    setPrice(prevPrice => prevPrice + 10000); // Double the price

  };



  return (
    <div>
      <Navbar price={price}  />
      <Header handleClaimPrice={handleClaimPrice}  />
      <AllProducts/>
      <CartContainer  handleIsActive={ handleIsActive} />
    </div>
  )
}

export default App
