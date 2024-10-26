function CardContainer({ handleIsActive, isActive, addProduct }) {
  return (
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center p-4 md:p-6">
      <h1 className="text-lg md:text-xl font-bold mb-4 md:mb-0">
        {isActive.cart
          ? "Available Players"
          : `Players ${addProduct.length} / 7`}
      </h1>

      <div className="flex flex-col md:flex-row gap-2 md:gap-4 w-full md:w-auto">
        <button
          onClick={() => handleIsActive("cart")}
          className="bg-blue-500 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full md:w-auto"
        >
          Available
        </button>

        <button
          onClick={() => handleIsActive("selected")}
          className="bg-blue-500 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300 w-full md:w-auto"
        >
          Selected ({addProduct.length})
        </button>
      </div>
    </div>
  );
}

export default CardContainer;
