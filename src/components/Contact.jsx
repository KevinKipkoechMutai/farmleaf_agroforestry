import { useToasts } from "react-toast-notifications"

const Contact = () => {

  const { addToast } = useToasts()

  const handleBtnClick = () => {
    addToast('Please check back later. Our blog detailing all features is coming up soon.', { appearance: "info", autoDismiss: true })
  }

  return (
    <div id="contact" style={{
      backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/573a8bbb9f72664e35ff4438/1506440015572-6S4CEAZ8HZYVDBT7VQKB/Desktop.jpg?format=2500w")',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    }} className="contact-section w-[100%] h-[55vh] flex flex-col justify-center items-center mt-5 py-3">
      <h1 className="font-poppins font-semibold text-[50px] sm:text-[40px] text-center text-gray-700 m-auto mb-0">Enhance Your Farming Practices</h1>
      <div onClick={handleBtnClick} className="hover:bg-blue-500 hover:border-collapse rounded cursor-pointer w-[40%] m-auto h-[14vh] border-2 border-white flex justify-center items-center mt-3">
        <p className="font-poppins font-semibold text-center text-white text-[21px] m-auto">Learn More About Agroforestry</p>
      </div>
    </div>
  )
}

export default Contact