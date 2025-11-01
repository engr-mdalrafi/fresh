import React from 'react'

const Button = ({title}) => {
  return (
    <>
      <button className='py-2.5 px-7 border-2 border-yellow-500 rounded-xl cursor-pointer hover:bg-yellow-500 text-2xl text-black font-semibold font-popines'>{title}</button>
    </> 
    
  )
}

export default Button
