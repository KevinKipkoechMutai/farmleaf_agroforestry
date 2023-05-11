import { useState } from 'react'
import { close, farmleafLogo, menu } from '../assets'
import { navLinks } from '../constants'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

  return (
    <nav className='w-full flex mt-0 top-0 justify-between items-center navbar p-6'>
        <img src={farmleafLogo} alt='my-logo' className='w-[150px]  '/>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((navLink, index) => (
                <li key={navLink.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLink.length - 1 ? "mr-0" : "mr-10"} text-black`}>
                    <a href={`#${navLink.id}`} className='cursor-pointer'>
                        {navLink.title}
                    </a>
                </li>
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle ? close : menu} alt='menu' className='w-[128px] h-[28px] object-contain'
                onClick={() => setToggle((prev) => !prev)}
            />
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded sidebar`}>
                <ul className='list-none flex flex-col justify-end items-start flex-1'>
                    {navLinks.map((navLink, index) => (
                        <li key={navLink.id} className={`font-popins font-normal cursor-pointer text-[16px] ${index === navLink.length - 1 ? "mr-0" : "mb-4"} text-white`}>
                            <a href={`#${navLink.id}`} className='cursor-pointer'>
                                {navLink.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar