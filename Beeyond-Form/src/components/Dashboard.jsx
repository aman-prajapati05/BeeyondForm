import React from 'react'
import { FaAngleRight } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex bg-slate-200 font-nunito">
      
      <div className="flex flex-row bg-slate-50 border-2 rounded-lg m-8 drop-shadow-xl text-gray-500">
        
        <div className="w-1/3 flex flex-col space-y-3 justify-center text-start text-[20px] mt-16 ml-8">
            <div className='p-2'>Section 1 <FaAngleRight/></div>
            <div className='p-2'>Section 2 <FaAngleRight/></div>
            <div className='p-2'>Section 3 <FaAngleRight/></div>
            <div className='p-2'>Section 4 <FaAngleRight/></div>
            <div className='p-2'>Section 5 <FaAngleRight/></div>
            <div className='p-2'>Section 6 <FaAngleRight/></div>
            <div className='p-2'>Section 7 <FaAngleRight/></div>
            <div className='p-2'>Section 8 <FaAngleRight/></div>
            <div className='p-2'>Section 9 <FaAngleRight/></div>
            <div className='p-2'>Section 10 - Contact Us <FaAngleRight/></div>
            <div className='p-2'>Section 11 - Featured Projects <FaAngleRight/></div>
        </div>

        <div className='flex flex-col space-y-3'>
            <h1 className='text-[3vw]'>Section 1</h1>
            <div className='text-[18px]'>Brand Name</div>
            <input
                type="text"
                aria-label="cname"
                name='cname'
                className='mt-1 p-2 border border-gray-300 rounded-md w-full'
            />
        </div>
      </div>
    </div>
  )
}

export default Dashboard