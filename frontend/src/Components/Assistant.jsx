import React from 'react'
import { IoMdCloseCircleOutline } from "react-icons/io";
const Assistant = ({state,setState}) => {
    return (
        <div>
            <div className={`bg-red-400 text-xl absolute right-10 bottom-10 rounded-lg duration-200 ease-in-out flex justify-between items-start p-3 ${state ? "w-[15%] h-[30%]" : 'w-[0%] h-[0%]' }`}>
                {   
                    state && 
                    <div>
                        Open
                        <button onClick={()=>setState(!state)}><IoMdCloseCircleOutline size={25}/></button>
                    </div>
                }
            </div>
            <button className={`rounded-full bg-blue-300 absolute right-10 bottom-10 duration-200 ease-in-out ${!state ? "w-14 h-14" : "w-0 h-0"}`} onClick={()=> setState(!state)}>
                
            </button>
        </div>
    )
}

export default Assistant