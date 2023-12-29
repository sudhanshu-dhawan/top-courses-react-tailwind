import React from 'react'

export default function Filter({filterData , category , setCategory}) {

  function filterhandler(title){
        setCategory(title)
  }
  
  return (
    <div className="flex justify-center items-center gap-3 lg:gap-6 mt-4 ">
         {
            filterData.map(  (data)=>{
                return(
                <button className={`bg-slate-900 rounded-md md:px-3 sm:py-0 sm:px-1 md:py-1 lg:px-5 lg:py-2 border-[2px] border-white text-white hover:scale-105 hover:bg-blue-700 transition-all duration-200
                ${category===data.title ?
                "border-white": "border-transparent"
                }
                `}  key={data.id} 
                 onClick={()=>filterhandler(data.title)}          >
                    {data.title}
                </button>
                )
                
                
            }
                 
            )
            
         }
    </div>
  )
}
