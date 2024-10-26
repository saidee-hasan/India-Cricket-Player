import Delete from"../../assets/delete.png";

function Cart({ cart, handleDelete }) {

  const { name, description, price, image } = cart;
  return (
    <div className="sm:flex gap-5 bg-white rounded-md shadow-md p-4 items-center">
      <div className="sm:flex  space-x-3">
        <img className=" md:w-12 w-24 mx-auto  md:h-12 "  src={image} alt="" />
        <h1 className="text-lg font-semibold">{name}</h1>

        <p className="text-gray-600 mt-1">{description}</p>
      </div>

      <div className="flex gap-2 ml-auto justify-center gap-2 mt-3">
        <button
          onClick={() => handleDelete(name)}
          className=" text-white  rounded-md  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
      <img className="w-10 " src={Delete} alt="" />
        </button>

      
      </div>
     
    </div>
  );
}

export default Cart;
