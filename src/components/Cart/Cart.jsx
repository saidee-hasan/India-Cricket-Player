
function Cart({cart,handleDelete}) {
    const{name,description,price,image} = cart;
  return (
    <div className="flex  gap-5  bg-white rounded-md shadow-md ">

        <h1>{name}</h1>
        <p>{description}</p>
        <button onClick={()=> handleDelete(cart.name)} className="bg-slate-500 p-2 rounded-md">delete</button>
     
    </div>
  )
}

export default Cart
