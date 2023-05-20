

const GoalItem = ({image, statement}) => {
  return (
    <div className="flex flex-row sm:w-[60%] w-[80%] items-start justify-center m-auto ">
        <img src={image} alt="goal image" className="h-[4rem] w-[4rem] mr-2 rounded-full"/>
        <div className="flex items-center justify-center m-auto">
            <p>{statement}</p>
        </div>
    </div>
  )
}



export default GoalItem