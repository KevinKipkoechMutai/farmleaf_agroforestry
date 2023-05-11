import styles from "../style"
import { downloadArrow } from "../assets"


const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-black w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23px]">
            <span className="text-gradient">Download &nbsp;</span>
          </p>
          
          <img src={downloadArrow} className="w-[23px] h-[23px] object-contain" alt="download arrow"/>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">our Brochure</span>
        </p>
      </div>
    </div>
  )
}

export default GetStarted