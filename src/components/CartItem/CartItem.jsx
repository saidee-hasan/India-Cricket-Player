function CartItem({ product, handleAddProduct }) {
  const { name, description, price, image,country } = product;

  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="p-4">
        <img className="mx-auto h-48" src={image} alt="" />
        <h1 className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-200">
          {name}
        </h1>

        <p className="mt-2 text-gray-700">{description}</p>
        <div className="flex justify-between">
          <p>{country}</p>
          <p>All-Rounder</p>
        </div>

     <hr />
     <p>Rating</p>
     <div className="flex justify-between">
     <p>Left-Hand-Bat</p>
     <p  className="text-gray-400">Left-Hand-Bat</p>
        </div>
    
<div className="flex justify-between">
        <p className="mt-4 text-xl font-semibold text-gray-900">
          ${price.toFixed(2)}
        </p>

        <button
          onClick={() => handleAddProduct(product)}
          className="mt-4  bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition duration-200"
        >
        Choose Player
        </button></div>
      </div>
    </div>
  );
}

export default CartItem;
