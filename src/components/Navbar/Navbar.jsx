import Logo from"../../assets/logo.png";
import Coin from"../../assets/coin.png";

function Navbar({price}) {
  const updatePrice = Math.round(price)
  return (
    <div className=" w-full fixed z-50 bg-green-200  ">

<div className="  mx-auto justify-between flex bg-green-200  container">
      <img  className="w-10 h-10" src={Logo} alt="" />

      <div className="flex gap-2">

        <ul className="flex md:gap-6  gap-2 mt-2">
            <li>Home</li>
            <li>About</li>
          
         
       
           
        


        </ul>
       <button> {updatePrice} </button> <img  className="w-8 " src="https://img.icons8.com/?size=100&id=63810&format=png&color=000000" alt="" />
               
                

      </div>



    </div>
    </div>
  )
}

export default Navbar
