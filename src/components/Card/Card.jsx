import { useEffect, useState } from "react"
import CartItem from "../CartItem/CartItem";


function Card({handleAddProduct}) {

  const [product,setProduct] = useState([]);
  useEffect(()=>{
    fetch("./fakeData.json")
    .then(res => res.json())
    .then(data => setProduct(data))
  },[])


  return (
    <div className="mx-auto container">
      <h1>Cart</h1>
      <div className="grid grid-cols-4 gap-5">
        {
          product.map((p,index)=><CartItem key={index} product={p} handleAddProduct={handleAddProduct} />)
        }
      </div>

    </div>
  )
}

export default Card
