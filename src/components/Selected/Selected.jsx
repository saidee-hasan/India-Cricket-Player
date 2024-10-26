import Cart from "../Cart/Cart"

function Selected({addProduct,handleDelete,handleIsActive}) {
  console.log(addProduct)
  return (
    <div className="mx-auto container">
      <h1>Selected</h1>

     <div className="space-y-4">
      {
        addProduct.map((cart,index)=><Cart key={index} handleDelete={handleDelete} cart={cart}/>)
      }


     </div>
     <div className="mt-10 py-5">
     <button
          onClick={() => handleIsActive("cart")}
          className="bg-blue-500 text-center text-white mt-10  font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full md:w-auto"
        >
          Available
        </button>
        </div>
    </div>
  )
}

export default Selected
