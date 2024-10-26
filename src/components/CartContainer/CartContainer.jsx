
function CartContainer({handleIsActive}) {
  return (
    <div className="flex justify-between mx-auto container">
      <h1>Available Players</h1>
      <div className="flex gap-4">
        <button onClick={()=>handleIsActive('cart')} className="bg-blue-500 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700 ">Available</button>
        <button onClick={()=>handleIsActive('selected')}  className="bg-blue-500 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700 ">Selected</button>
      </div>
    </div>
  )
}

export default CartContainer
