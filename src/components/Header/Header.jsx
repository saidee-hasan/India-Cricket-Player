import Bg from "../../assets/bg-shadow.png";
import Banner from "../../assets/banner-main.png";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Header({handleClaimPrice}) {
 
  return (
    <div className="container mx-auto">
      <div className="relative ">
        <img
          src={Bg}
          alt="Background"
          className="w-full h-auto bg-black h-[400px] md:h-auto  "
        />
        <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 p-10">
          <div className="md:space-y-5  space-y-2 ">
            <img
              className="mx-auto  sm:w-32 w-28 md:w-auto"
              src={Banner}
              alt=""
            />

            <h1 className="text-white font-bold">
              Assemble Your Ultimate Dream 11 Cricket Team
            </h1>
            <p className="text-white text-center">
              Beyond Boundaries Beyond Limits
            </p>
            <div className="mx-auto text-center">
              <button onClick={handleClaimPrice} className="bg-blue-500 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700 ">
                Claim Free Credit
              </button>
           



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
