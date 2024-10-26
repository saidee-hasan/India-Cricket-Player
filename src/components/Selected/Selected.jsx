import Cart from "../Cart/Cart"

function Selected({addProduct,handleDelete}) {
  console.log(addProduct)
  return (
    <div className="mx-auto container">
      <h1>Selected</h1>

     <div className="space-y-4">
      {
        addProduct.map((cart,index)=><Cart key={index} handleDelete={handleDelete} cart={cart}/>)
      }


     </div>


    </div>
  )
}

export default Selected
