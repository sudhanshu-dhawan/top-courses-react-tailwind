import React from 'react'
import './Spinner.css'
export default function Spinner() {
  return (
    <div className="flex flex-col justify-center items-center mt-[300px]">
        <div className='spinner'></div>
        <p className="mt-8 text-white font-bold">Loading....</p>
      
    </div>
  )
}
