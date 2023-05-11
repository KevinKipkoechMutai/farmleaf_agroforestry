import { farmer } from "../assets"
import { useToasts } from "react-toast-notifications"

const Finance = () => {

  const { addToast } = useToasts()

  const handleBtnClick = () => {
    addToast('Please check back later. Our blog detailing all features is coming up soon.', { appearance: "info", autoDismiss: true })
  }


  return (
    <div id="finance" className="flex flex-col sm:flex-row justify-center items-center px-2 py-4 w-[80%] m-auto">
      <div className="flex flex-col gap-2 justify-center items-start">
        <h1 className="font-poppins font-semibold text-gradient text-[50px] sm:text-[40px]">Financing Programs</h1>
        <h5 className="font-poppins font-semibold text-[40px] sm:text-[25px]">We arrange private and public capital solutions to help our farmers adopt agroforestry.</h5>
        <p className="font-poppins font-light text-[16px] w-[80%] text-left mt-3 mb-5">
          Our team will analyze your farm to assess its commercial viability and estimate the quantity of capital needed to complete the transition process. 
        </p>
        <p className="font-poppins font-light text-[16px] w-[80%] text-left mt-3 mb-5">
          Value sits in what&apos;s productive on your farm, so we make it easy to plant at no additional cost.
        </p>
        <button onClick={handleBtnClick} className="px-4 py-2 rounded bg-blue-800 h-[60px] hover:bg-blue-600 text-white font-bold transition duration-300 ease-in-out cursor-pointer">Learn More</button>
      </div>
      <img src={farmer} alt="finance" className="max-w-[30rem] max-h-[25rem] px-2 py-3"/>
    </div>
  )
}

export default Finance