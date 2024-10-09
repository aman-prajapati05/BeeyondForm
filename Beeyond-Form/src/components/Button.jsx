import React from 'react'

const Button = ({border=''}) => {
  return (
    // <Link href={`Project/${cname}`}>
    <button
              className={` text-white flex ${border}  justify-between  w-full  rounded-full glass px-4 py-2 items-center`}
            >
             
              See Project 
            </button>
            // </Link>
  )
}

export default Button