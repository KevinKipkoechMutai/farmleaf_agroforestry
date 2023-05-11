import { newLogo } from '../assets'


const Footer = () => {
  return (
    <footer className="flex flex-col bg-slate-200 w-full justify-center items-center py-6">
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-between gap-3 w-[80%] m-auto">
        <img src={newLogo} alt='logo' className='sm:w-[130px] w-[12rem] sm:h-[60%] h-[100%]'/>
        <div className='flex flex-col justify-between items-start gap-3'>
          <h3 className='font-poppins font-semibold text-3xl mt-0'>Solutions</h3>
          <p className=' py-2 text-left'>Farm Analytics</p>
          <p className=' py-2 text-left'>Services</p>
          <p className=' py-2 text-left'>How Farmleaf Works</p  >
        </div>
        <div className='flex flex-col justify-center items-start gap-3'>
          <h3 className='font-poppins font-semibold text-3xl mt-0'>Resources</h3>
          <p className=' py-2 text-left'>Financing programs</p>
          <p className=' py-2 text-left'>Service Provision</p>
          <p className=' py-2 text-left'>Join Us</p>
        </div>
        <div className='flex flex-col justify-center items-start gap-3'>
          <h3 className='font-poppins font-semibold text-3xl mt-0'>About</h3>
          <p className=' py-2 text-left'>Agroforestry</p>
          <p className=' py-2 text-left'>Our Team</p>
          <p className=' py-2 text-left'>Research Opportunities</p>
        </div>
      </div>
      <hr className="w-[80%] border-0 border-t border-gray-900 my-6"/>
      <div className="flex justify-center items-center py-3">
        <p className="text-sm">&copy; {new Date().getFullYear()} Farmleaf Inc. All Rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
