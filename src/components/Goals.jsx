import { advantages } from '../constants'
import GoalItem from './GoalItem'
import { tilled_land } from '../assets'

const Goals = () => {
  return (
    <div className='flex sm:flex-row flex-col-reverse w-[80%]  m-auto mt-4 '>
      <img src={tilled_land} alt='tilled land' className='w-[40rem] h-[27rem] m-auto rounded'/>
      <div className='flex flex-col items-center justify-between w-[80%] m-auto sm:mt-0 mt-3'>
        <h1 className="font-poppins font-semibold text-gradient text-[50px] sm:text-[40px] mb-3">Why Agroforestry?</h1>
        <div className='flex flex-col items-center justify-center gap-2'>
          {advantages.map((item) => (
            <GoalItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Goals