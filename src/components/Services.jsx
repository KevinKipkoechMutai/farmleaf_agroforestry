import { services} from '../assets'

const Services = () => {
  return (
    <div id='services' className='flex sm:flex-row flex-col-reverse items-center justify-between w-[80%] m-auto'>
        <div className='flex justify-center items-center overflow-hidden w-fit h-fit p-0 rounded-3xl sm:my-1 my-3'>
            <img src={services} alt='services' className='max-w-[100%] max-h-[100%]'/>
        </div>

        <div className='flex flex-col items-start justify-center  mr-4 gap-3'>
            <h1 className="font-poppins font-semibold text-gradient text-[50px] sm:text-[40px] mb-3">Our Services</h1>
            <div className='max-w-[25rem] min-h-[6.5rem] border-2 border-gray-500 rounded-xl flex items-center justify-center'>
                <h5 className="font-poppins font-light text-[21px] text-center">Personalized agroforestry training and implementation assistance</h5>
            </div>
            <div className='max-w-[25rem] min-h-[6.5rem] border-2 border-gray-500 rounded-xl flex items-center justify-center'>
                <h5 className="font-poppins font-light text-[21px] text-center">Tailored microfinance loans with competitive interest rates and long repayment holidays</h5>
            </div>
            <div className='max-w-[25rem] min-h-[6.5rem] border-2 border-gray-500 rounded-xl flex items-center justify-center'>
                <h5 className="font-poppins font-light text-[21px] text-center">Connection to market buyers for new products such as fruits, nuts, and honey</h5>
            </div>
        </div>
        
    </div>
  )
}

export default Services