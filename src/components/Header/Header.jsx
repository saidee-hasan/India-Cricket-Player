import Bg from "../../assets/bg-shadow.png";
import Banner from "../../assets/banner-main.png";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Header({handleClaimPrice}) {
 
  return (
    <div className="container mx-auto">

    <div className="relative">

        <img

            src={Bg}

            alt="Background"

            className="w-full h-[400px] md:h-[500px] lg:h-[600px] bg-gray-800  object-cover"

        />

        <div className="absolute inset-0 flex items-center justify-center  p-5 md:p-10">

            <div className="text-center md:space-y-5 space-y-2">

                <img

                    className="mx-auto sm:w-32 w-28 md:w-auto"

                    src={Banner}

                    alt="Banner"

                />

                <h1 className="text-white font-bold text-lg md:text-2xl lg:text-3xl">

                    Assemble Your Ultimate Dream 11 Cricket Team

                </h1>

                <p className="text-white text-sm md:text-base lg:text-lg">

                    Beyond Boundaries Beyond Limits

                </p>

                <div className="mx-auto">

                    <button

                        onClick={handleClaimPrice}

                        className="bg-blue-500 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"

                    >

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
