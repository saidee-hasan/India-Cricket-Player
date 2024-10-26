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
    
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-5">
        {
          product.map((p,index)=><CartItem key={index} product={p} handleAddProduct={handleAddProduct} />)
        }
      </div>

    </div>
  )
}

export default Card
