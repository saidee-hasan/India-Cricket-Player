

function CartItem({product,handleAddProduct}) {

  const{name,description,price} = product
  return (
    <div className="bg-slate-50 border  p-2">
      <h1>{name}</h1>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={()=>handleAddProduct(product)} className="bg-gray-500 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-200">

        Purchase

    </button>
 
    </div>
  )
}

export default CartItem
