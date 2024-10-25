import Logo from"../../assets/logo.png";

function Navbar() {
  return (
    <div className="container mx-auto justify-between flex bg-fuchsia-200 p-2">
      <img  className="w-10 h-10" src={Logo} alt="" />

      <div className="">

        <ul className="flex md:gap-6  gap-2 mt-2">
            <li>Home</li>
            <li>About</li>
            <li>Balance</li>
            <li>Home</li>
            <div className="">
           
                <button>  Coin</button>
            </div>


        </ul>


      </div>



    </div>
  )
}

export default Navbar
