import { advantages } from '../constants'
import GoalItem from './GoalItem'
import { tilled_land } from '../assets'

const Goals = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse w-[90%]  m-auto mt-4 items-center justify-between'>
      <img src={tilled_land} alt='tilled land' className='w-[50rem] h-[27rem] m-auto rounded sm:ml-4 ml-0'/>
      <div className='flex flex-col items-center justify-between sm:w-[70%] w-[100%] m-auto sm:mt-0 mt-3 sm:mb-0 mb-2'>
        <h1 className="font-poppins font-semibold text-gradient text-[50px] sm:text-[40px] mb-3">Why Agroforestry?</h1>
        <div className='flex flex-col items-end justify-around gap-2 mr-5'>
          {advantages.map((item) => (
            <GoalItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goals