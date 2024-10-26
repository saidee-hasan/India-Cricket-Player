

function CartItem({product,handleAddProduct}) {

  const{name,description,price,image} = product;
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">

            <div className="p-4">
<img className="mx-auto h-48" src={image} alt="" />
                <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-200">{name}</h1>

                <p className="mt-2 text-gray-700">{description}</p>

                <p className="mt-4 text-xl font-semibold text-gray-900">${price.toFixed(2)}</p>

                <button 
    onClick={() => handleAddProduct(product)} 
    className="mt-4 w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-200"
>
    Purchase
</button>

            </div>

        </div>
  )
}

export default CartItem
