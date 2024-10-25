import Bg from '../../assets/bg-shadow.png';
import Banner from'../../assets/banner-main.png'


function Header() {
  return (
    <div className='container mx-auto'>
       <div className="relative">
      <img src={Bg}  alt="Background" className="w-full h-auto bg-black h-auto" />
      <div className="absolute inset-0 flex items-center justify-center bg-opacity-50">
        <div className=''>
        <img  className='mx-auto  sm:w-32 w-20' src={Banner} alt="" />

        <h1 className="text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className='text-white text-center'>Beyond Boundaries Beyond Limits</p>
        <div className="mx-auto text-center">
        <button className='bg-blue-500 text-center text-white font-bold py-2 px-4 rounded hover:bg-blue-700 '>Claim Free Credit</button>
        </div>
        
      
       
       
        </div>
               
     
      </div>
    </div>
   

  
</div>
     



  )
}

export default Header
