import styles from '../style'
import { farmForest } from '../assets'
import GetStarted from './GetStarted'
import { useToasts } from 'react-toast-notifications'
import { useState } from 'react'

const Home = () => {
  const { addToast } = useToasts()

  const [email, setEmail] = useState("")

  const handleDownloadBrochure = () => {
      const downloadUrl = "https://drive.google.com/file/d/1akHn6orydxxzejRD7Pw8wUMy4zyggkzP/view?usp=sharing"
      const fileName = "farmleaf.pdf"
      const link = document.createElement("a")
      link.href = downloadUrl
      link.target = "_blank"
      link.download - fileName
      link.click()

      addToast('Thanks for downloading our brochure!', { appearance: "success", autoDismiss: true })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addToast('Thanks for enrolling! We will contact you soon.', { appearance: "info", autoDismiss: true })
  }


  return (
    <section id='home' className='flex md:flex-row flex-col px-6 gap-10 w-[93%] m-auto justify-between items-start'>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-0 px-6`}>
      <div className='flex flex-col sm:flex-row justify-between sm:items-center items-start w-full top-0 ml-0'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
          Welcome to <br className='sm:block hidden'/> {" "}
          <span className='text-gradient'>FarmLeaf</span>
        </h1>
        <div className='ss:flex sm:ml-4 sm:mt-0 mt-4 rounded-full'>
          <div onClick={handleDownloadBrochure}>
            <GetStarted />
          </div>
        </div>
      </div>

        <p className={`${styles.paragraph} max-w-[550px] mt-5 text-white` }>
          We are rolling out agroforestry adoption plans designed for the Kenyan ecosystem. Join us to today and enjoy great environmental and economic benefits from your farm!
        </p>
        <form onSubmit={handleSubmit} className="flex-col sm:flex-row sm:items-center max-w-[100%] w-[80%] flex justify-between mt-5 h-[60px]">
          <input
            type="email"
            placeholder="Your email"
            className="w-full sm:w-auto min-h-[60px] px-4 py-2 mb-4 sm:mb-0 sm:mr-4 rounded-l-lg border border-gray-300 focus:border-blue-500 focus:outline-none text-black cursor-pointer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-4 py-2 rounded-r-lg bg-blue-800 min-h-[60px] hover:bg-blue-600 text-white font-bold transition duration-300 ease-in-out cursor-pointer"
          >
            Join the waitlist
          </button>
        </form>

      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative px-0`}>
        <img src={farmForest} alt="agroforestry" className='w-[100%] h-[25rem] relative z-10 mr-0'/>
      </div>
    </section>
  )
}

export default Home